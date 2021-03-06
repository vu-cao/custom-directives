(function() {
    var app = angular.module('tableHelperModule', []);

    var directiveController = function($scope) {
        $scope.customers = [{
            firstName: 'Vu',
            lastName: 'Cao',
            address: '5 Pyramid Ave, Padstow',
            age: 37
        }, {
            firstName: 'Henry',
            lastName: 'Truong',
            address: '36 Wilkins St, Yagoona',
            age: 33
        }, {
            firstName: 'Phi',
            lastName: 'Lai',
            address: '11 ABC St, Riverwood',
            age: 37
        }];
    };

    directiveController.$inject = ['$scope'];
    app.controller('directiveController', directiveController);
})();