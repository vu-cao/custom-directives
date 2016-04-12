(function() {
    var app = angular.module('tableHelperModule', []);

    var directiveController = function($scope) {
        var customers = [{
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

        $scope.getCustomers = function() {
            return customers;
        };
    };

    directiveController.$inject = ['$scope'];
    app.controller('directiveController', directiveController);
})();