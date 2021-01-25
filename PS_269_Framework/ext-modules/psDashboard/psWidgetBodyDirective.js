
// 01/25/2021 11:10 am - SSN - [20210125-1023] - [001] - M06-05 - Compiling widget content

"use strict";

angular.module("psDashboard").directive("psWidgetBody", ["$compile", function ($compile) {

    return {
        templateUrl: "ext-modules/psDashboard/psWidgetBodyTemplate.html",
        link: function (scope, elem, attrs) {

            let newElement = angular.element(scope.item.template);

            elem.append(newElement);

            $compile(newElement)(scope);


            // 01/25/2021 02:59 pm - SSN - [20210125-1455] - [001] - M06-10 - Closing widgets
            scope.close = function () {

                let widgetIndex = scope.widgets.indexOf(scope.item);

                if (widgetIndex > -1) {

                    scope.widgets.splice(widgetIndex, 1);
                }

            }

        }
    }

}]);
