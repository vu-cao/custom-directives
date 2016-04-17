(function() {

    var templateUrl = 'view/tableTemplate.html';
    var link = function(scope, elem, attrs, ngModelController) {
        var openTableTag = '<table class="table table-striped table-hover table-condensed">';
        var closeTableTag = '</table>';
        var headerCols = [];
        var table = '';
        var colNames = getColumnNames();
        var sortDir = 1;
        var sortCol = '';
        var data = null;

//        attrs.$observe('ngModel', function(value) {
//            scope.$watch(value, function(newValue, oldValue) {
//                render();
//            });
//        });
//        scope.$watch(attrs.ngModel, function(newValue, oldValue) {
//            render();
//        });
        
//        scope.$watch(function() {
//            return ngModelController.$modelValue;
//        }, function(newValue, oldValue) {
//            render();
//        });
        
        ngModelController.$render = render;
        
        wireEvents();

        // Render the table
        function render() {
            if (ngModelController && ngModelController.$modelValue.length) {
                data = ngModelController.$modelValue;
                table = table.concat(openTableTag, renderHeader(), renderRows(), closeTableTag);

                renderTable();
            }
        }

        function wireEvents() {
            function sort(field, sortOrder) {

                data.sort((a, b) => {
                    if (a[field] > b[field]) {
                        return sortDir;
                    }
                    if (a[field] < b[field]) {
                        return -1 * sortDir;
                    }
                    return 0;
                });
                render();
            }
            elem.on('click', function(event) {
                if (event.srcElement.nodeName === 'TH') {
                    var val = event.srcElement.innerHTML;
                    var propertyName = getRawColumnName(val);
                    if (propertyName === sortCol) {
                        sortDir = sortDir * -1;
                    }
                    sortCol = propertyName;
                    sort(propertyName, sortDir);
                }
            });
        }

        // Render header
        function renderHeader() {
            var openThTag = '<th class="sortable">';
            var closeThTag = '</th>';
            var headerItem = '';

            var openTHeadTag = '<thead>';
            var closeTHeadTag = '</thead>';
            var headerRow = '';

            headerRow += openTHeadTag;
            var header = colNames.reduce(function(previousValue, currentName, currentIndex, array) {
                return previousValue.concat(openThTag, currentName, closeThTag);
            }, headerItem);

            headerRow += header;
            headerRow += closeTHeadTag;

            return headerRow;
        }

        // Render rows
        function renderRows() {
            var openTrTag = '<tr>';
            var closeTrTag = '</tr>';
            var row = '';

            // Render column
            function renderColumn(columnValue) {
                var openTdTag = '<td>';
                var closeTdTag = '</td>';
                var column = '';

                return column.concat(openTdTag, columnValue, closeTdTag);
            }

            data.forEach((currentObject, index, array) => {
                row = row.concat(openTrTag);
                colNames.forEach((currentName, index, array) => {
                    propertyName = getRawColumnName(currentName);
                    row = row.concat(renderColumn(currentObject[propertyName]));
                });
                row = row.concat(closeTrTag);
            });

            return row;
        }

        function renderTable() {
            elem.html(table);
            table = '';
        }

        function getRawColumnName(colName) {
            if (!scope.map) {
                return colName;
            }
            var selectedMap = scope.map.find((element, index, array) => {
                var propertyName = Object.keys(element)[0];
                return element[propertyName] === colName;
            });
            return Object.keys(selectedMap)[0];
        }

        function getColumnNames() {
            var colNames = [];
            scope.map.forEach(function(currentObject, index, array) {
                if (!currentObject['hidden']) {
                    var firstPropertyName = Object.keys(currentObject)[0];
                    this.push(currentObject[firstPropertyName]);
                }
            }, colNames);
            return colNames;
        }
    };
    var tableHelper = function() {


        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
                map: '='
            },
            replace: true,
            templateUrl: templateUrl,
            link: link
        };
    };

    angular.module('tableHelperModule').directive('tableHelper', tableHelper);
})();