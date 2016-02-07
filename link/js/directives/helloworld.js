(function () {
    var helloWorldDirective = function () {
        return {
            replace: true,
            template: '<div>Hello World</div>'
        };   
    };
    
    angular.module('helloWorldDirectiveModule').directive('helloWorld', helloWorldDirective);
})();