(function () {
    var sharedScopeDirective = function () {
        return {
            restric: 'EA',
            template: 'Name: {{ customer.name }} <br/> Street: {{ customer.street }}'
        }
    };
    angular.module('scopeModule').directive('sharedScope', sharedScopeDirective);
})();