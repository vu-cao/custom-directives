(function () {    
    var delayBindDirective = function ($interpolate) {
        var compile = function (element, attributes) {
            console.log("COMPILE - " + element[0].tagName);
            var delayBindFunc = $interpolate(attributes.delayBind);
            attributes.$set('delayBind', null);//Clear delay-bind attribute so that no bindings occur
            return {
                pre: function (scope, elem, attrs) {
                    console.log("PRE - " + elem[0].tagName);
                },
                post: function(scope, elem, attrs) {
                    console.log("POST - " + elem[0].tagName);
                    elem.on(attrs.trigger, function(event) {
                        if (attrs.attribute && !elem.attr(attrs.attribute)) {
                            elem.attr(attrs.attribute, delayBindFunc(scope));
                        }
                    });
                }
            }
        };
        
        return {
            restrict: 'A',
            compile: compile
        };
    };
    
    delayBindDirective.$inject = ['$interpolate'];
    angular.module('delayBindModule').directive('delayBind', delayBindDirective);
})();