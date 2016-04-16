(function() {
    var link = function(scope, elem, attrs) {
        var status = angular.element(document.getElementById('status'));
        if ("geolocation" in navigator) {
            var geoOptions = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 30000
            };
            navigator.geolocation.getCurrentPosition(displayGeolocation, displayError, geoOptions);
        } else {
            status.html('Geolocation is not supported...');
        }
        
        function displayError(error) {
            status.html('Cannot get Geolocation');
        }
        
        function displayGeolocation(position) {
            var mapContainer = angular.element(document.getElementById('map'));
            mapContainer.attr('style', 'height:' + scope.height +
                             'px;width:' + scope.width + 'px');

            
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            var longLat = {
                lat: lat, 
                lng: long
            };
            
            var map = new google.maps.Map(mapContainer[0], {
                center: longLat,
                scrollwheel: false,
                zoom: 15
            });
            
            var marker = new google.maps.Marker({
                map: map,
                position: longLat
            });
            status.html('Geolocation loaded! Longitude: ' + long + '. Latitude: ' + lat);
        }
    };

    var templateUrl = 'view/googleMapTemplate.html';
    var googleMap = function() {
        return {
            restrict: 'E',
            scope: {
                height: '@',
                width: '@'
            },
            replace: true,
            templateUrl: templateUrl,
            link: link
        };
    };

    angular.module('googleMapModule').directive('googleMap', googleMap);
})();