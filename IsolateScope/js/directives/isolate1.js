(function () {
    var isolateScope1Directive = function () {
        return {
            restrict: 'AE',
            scope: {
                name: '@'
            },
            template: 'Name: {{ name }}'
        };
    };
//    isolateScope1Directive.$inject = ['$scope'];
    angular.module('scopeModule').directive('isolateScope1', isolateScope1Directive);
}) ();