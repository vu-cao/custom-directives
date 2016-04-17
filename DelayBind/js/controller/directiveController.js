(function () {
    var directiveController = function ($scope) {
        $scope.customers = [{
            firstName: 'Vu',
            lastName: 'Cao',
            address: '5 Pyramid Ave, Padstow',
            age: 37,
            url: 'http://vu.cao'
        }, {
            firstName: 'Henry',
            lastName: 'Truong',
            address: '36 Wilkins St, Yagoona',
            age: 33,
            url: 'http://henry.truong'
        }, {
            firstName: 'Phi',
            lastName: 'Lai',
            address: '11 ABC St, Riverwood',
            age: 37,
            url: 'http://phi.lai'
        }];
    };
    directiveController.$inject = ['$scope'];
    angular.module('delayBindModule').controller('directiveController', directiveController);
})();