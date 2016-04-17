(function () {
    var customerController = function ($scope) {
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
        
        $scope.addCustomer = function (customer) {
            console.log("ADD");
            $scope.customers.push(customer);
        };
    }
    customerController.$inject = ['$scope'];
    angular.module('customerModule').controller('customerController', customerController);
})();