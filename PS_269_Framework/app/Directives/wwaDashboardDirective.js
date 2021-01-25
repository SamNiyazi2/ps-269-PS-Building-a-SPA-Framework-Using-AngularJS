
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
                            id: 1000
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
                            id:1002
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
                            id: 5000
                        }

                    }
                }


            ];


            scope.widgets = [
                {
                    title: "Title 1",
                    sizeX: 3,
                    sizeY: 3,
                    row: 0,
                    col: 0,
                    template: '<wwa-temperature></wwa-temperature>',
                    widgetSettings: {
                        id: 1000
                    }
                }

                ,
                {
                    title: "Second-002",
                    sizeX: 5,
                    sizeY: 3,
                    row: 0,
                    col: 5,
                    template: '<wwa-employee></wwa-employee>',
                    widgetSettings: {
                        id: 5001
                    }
                }
                ,
                {
                    title: "Third-003-Guide",
                    sizeX: 5,
                    sizeY: 3,
                    row: 3,
                    col: 5,
                    template: '<wwa-inventory></wwa-inventory>',
                    widgetSettings: {
                        id: 1002
                    }
                }


            ];


        }
    };

}]);
