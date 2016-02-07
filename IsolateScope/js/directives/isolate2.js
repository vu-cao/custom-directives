(function () {
    var isolateScope2Directive = function () {
        return {
            restrict: 'AE',
            scope: {
                customer: '='
            },
            template: 'Name: {{ customer.name }} Street: {{ customer.street }} <button ng-click="customer.name=\'TEST\'">'
        };
    };
    angular.module('scopeModule').directive('isolateScope2', isolateScope2Directive);
}) ();