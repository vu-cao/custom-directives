(function(){
    var link = function(scope, elem, attrs) {
        var openTableTag = '<table class="table">';
        var closeTableTag = '</table>';
        var headerCols = [];
        var table = '';
        
        scope.$watchCollection(scope.data, render);
        
        
        function render() {
            if (scope.data && scope.data.length) {
                table += openTableTag;
                table += renderHeader();
//                table += renderRows();
                table += closeTableTag;
                
                renderTable();
            }
        }
        
        function renderHeader() {
            var openThTag = '<th>';
            var closeThTag = '</th>';
            var header = '';
            
            var openRowTag = '<tr>';
            var closeRowTag = '</tr>';
            var headerRow = '';
            
            header += openThTag;
            
            for (index in scope.map) {
                headerRow = '';
                
                if (!scope.map[index]['hidden']) {
                    headerRow += openRowTag;
//                    console.log("field:" + scope.map[index][Object.keys(scope.map[index])[0]]);
                    headerRow += scope.map[index][Object.keys(scope.map[index])[0]];
                    headerRow += closeRowTag;
                    header += headerRow;
                }                
                
//                console.log(headerRow);
            }
            header += closeThTag;
            
            console.log(header);
            return header;
        }
        
        function renderTable() {
            elem.html(table);
        }
    };
    var templateUrl = 'view/tableTemplate.html';
    var tableHelper = function() {
        return {
            restrict: 'E',
            scope: {
                data: '=',
                map: '='
            },
            templateUrl: templateUrl,
            link: link
        };
    };
    
    angular.module('tableHelperModule').directive('tableHelper', tableHelper);
})();