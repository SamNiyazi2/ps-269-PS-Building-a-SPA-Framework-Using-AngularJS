
// 01/25/2021 11:10 am - SSN - [20210125-1023] - [001] - M06-05 - Compiling widget content

"use strict";

angular.module("psDashboard").directive("psWidgetBody", ["$compile", "$modal", function ($compile, $modal) {

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


            // 01/25/2021 03:44 pm - SSN - [20210125-1523] - [001] - M06-11 - Showing a widget settings dialog
            scope.settings = () => {

                var options = {
                    templateUrl: scope.item.widgetSettings.templateUrl,
                    controller: scope.item.widgetSettings.controller,
                    scope: scope
                };

                $modal.open(options);

            }

             

            scope.getBackupgroundImagestyle = function () {
                  
                if (scope.selectedLocation && scope.selectedLocation.image) {
                    let tempValue2 = "url(/images/" + (scope.selectedLocation.image) + ")";
                    return { "background-image": tempValue2 };
                }

                if (scope.selectedEmployee && scope.selectedEmployee.image) {
                    let tempValue2 = "url(/images/" + (scope.selectedEmployee.image) + ")";
                    return { "background-image": tempValue2 };
                }

                return {};

            }

        }
    }

}]);
