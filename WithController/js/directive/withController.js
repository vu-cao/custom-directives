(function () {
    var withController = function () {
        var templateUrl = 'view/withControllerTemplate.html';
        
        var controller = function ($scope) {
            
            
            $scope.addCustomer = function () {
                var customer = {
                    firstName: $scope.firstName,
                    lastName: $scope.lastName
                };
                $scope.customers.push(customer);
                $scope.add()(customer);
            };
            var init = function () {
                $scope.customers = angular.copy($scope.data);
                console.log($scope.add);
            };
            
            init();

        };
        /*var link = function (scope, elem, attrs) {
            var data = angular.copy(scope.data);
            var button = angular.element(document.getElementById('add'));
            var firstName = angular.element(document.getElementById('firstName'));
            var lastName = angular.element(document.getElementById('lastName'));
            var table = angular.element(document.getElementById('list'));
            render();
            
            firstName.on('input propertychange paste', function (event) {
                if (firstName.val()) {
                    button.removeAttr('disabled');
                } else {
                    button.attr('disabled', 'disabled');
                }
            });
            lastName.on('input propertychange paste', function (event) {
                if (lastName.val()) {
                    button.removeAttr('disabled');
                } else {
                    button.attr('disabled', 'disabled');
                }
            });
            
            button.on('click', function (event) {
                var customer = {
                        firstName: firstName.val(),
                        lastName: lastName.val()
                };
                scope.$apply(function () {
                    scope.add()(customer);
                });
                data.push(customer);
                render();
            });
            
            function render () {
                if (data && data.length) {
                    var openUlTag = '<ul>';
                    var closeUlTag = '</ul>';
                    var openLiTag = '<li>';
                    var closeLiTag = '</li>';
                    
                    var html = '';
                    html = data.reduce(function (previousValue, currentValue, curentIndex, array) {
                        return previousValue.concat(openLiTag, currentValue.firstName, ' ', currentValue.lastName, closeLiTag);
                    }, html);
                    
                    table.html(openUlTag + html + closeUlTag);
                }
            }
        };*/
        
        controller.$inject = ['$scope'];
        
        return {
            restrict: 'E',
            templateUrl: templateUrl,
            scope: {
                data: '=',
                add: '&'
            },
            controller: controller
        }
    };
    
    angular.module('customerModule').directive('withController', withController);
})();