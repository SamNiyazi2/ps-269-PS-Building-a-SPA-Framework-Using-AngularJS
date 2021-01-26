
// 01/24/2021 07:05 pm - SSN - [20210124-1856] - [001] - M05-04 - Routing to custom directive

"use strict";

angular.module("app").directive("wwaDashboard", [function () {

    return {
        scope: {

        },
        template: '<ps-dashboard></ps-dashboard>',
        link: function (scope) {

            scope.dashboardTitle = "My first Dashboard";

            // 01/25/2021 08:13 am - SSN - [20210125-0809] - [001] - M05-08 - Dashboard options -- Gridster options

            // https://github.com/manifestwebdesign/angular-gridster#configuration
            scope.gridsterOpts = {
                columns: 12,
                margins: [20, 20],
                outerMargin: false,
                pushing: true,
                floating: true,
                swapping: false
            };

            // 01/25/2021 01:30 pm - SSN - [20210125-1316] - [001] - M06-07 - A button to add widgets

            scope.widgetDefinitions = [
                {
                    title: "Temperature",
                    settings: {
                        sizeX: 3,
                        sizeY: 3,
                        minSizeX: 2,
                        minxSizeY: 2,
                        template: '<wwa-temperature></wwa-temperature>',
                        widgetSettings: {
                            id: 1000,
                            templateUrl: 'app/dialogs/wwaSelectLocationTemplate.html',
                            controller: 'wwaSelectLocationController'
                        }

                    }
                },
                {
                    title: "Inventoty",
                    settings: {
                        sizeX: 5,
                        sizeY: 3,
                        minSizeX: 2,
                        minxSizeY: 2,
                        template: '<wwa-inventory></wwa-inventory>',
                        widgetSettings: {
                            id: 1002,
                            templateUrl: 'app/dialogs/wwaSelectLocationTemplate.html',
                            controller: 'wwaSelectLocationController'

                        }
                    }
                },
                {
                    title: "Employee",
                    settings: {
                        sizeX: 5,
                        sizeY: 3,
                        minSizeX: 2,
                        minxSizeY: 2,
                        template: '<wwa-employee></wwa-employee>',
                        widgetSettings: {
                            id: 5000,
                            templateUrl: 'app/dialogs/wwaSelectEmployeeTemplate.html',
                            controller: 'wwaSelectEmployeeController'

                        }

                    }
                }


            ];

            scope.widgets = [];


            let autoDemoLoad = false;

            if (autoDemoLoad) {

                let xCounter = 0;

                for (let x = 0; x < 2; x++) {

                    angular.forEach(scope.widgetDefinitions, tempWidget => {

                        xCounter++;

                        let var1 = angular.copy(tempWidget.settings);
                        var1.title = var1.title + " (" + xCounter + ")";


                        scope.widgets.push(var1);
                    });


                }

            }



        }
    };

}]);
