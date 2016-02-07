(function () {
    var isolateScopeDirective = function () {
        return {
            restrict: 'EA',
            scope: {},
            template: 'Name: {{ customer.name }} <br/> Street: {{ customer.street }}'
        };
    };
    angular.module('scopeModule').directive('isolateScope', isolateScopeDirective);
}) ();