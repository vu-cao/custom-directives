(function() {
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
            var headerRow = '';

            var openRowTag = '<tr>';
            var closeRowTag = '</tr>';
            var header = '';

            headerRow += openRowTag;

            for (index in scope.map) {
                header = '';

                if (!scope.map[index]['hidden']) {
                    header += openThTag;
                    header += scope.map[index][Object.keys(scope.map[index])[0]];
                    header += closeThTag;
                    headerRow += header;
                }
            }
            headerRow += closeRowTag;

            return headerRow;
        }

//        function renderRows() {
//
//        }

        function renderTable() {
            elem.html(table);
        }
    };

    var templateUrl = '/view/tableTemplate.html';
    var tableHelper = function() {
        return {
            restrict: 'E',
            scope: {
                data: '=',
                map: '='
            },
            replace: true,
            templateUrl: templateUrl,
            link: link
        };
    };

    angular.module('tableHelperModule').directive('tableHelper', tableHelper);
})();