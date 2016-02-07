(function () {
    var defaultController = function ($scope) {
        $scope.customer = {
            name: 'Vu',
            street: 'Pyramid Avenue',
        };
        $scope.changeName= function () {
            $scope.customer.name = 'CHANGED!';  
        };
    };
    
    defaultController.$inject = ['$scope'];
    angular.module('scopeModule').controller('defaultController', defaultController);
})();