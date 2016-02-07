(function () {
    var isolateScope3Directive = function () {
        return {
            restrict: 'EA',
            scope: {
                action: '&'
            },
            template: '<button ng-click="action()" />'
        };
    };
    angular.module('scopeModule').directive('isolateScope3', isolateScope3Directive);
}) ();