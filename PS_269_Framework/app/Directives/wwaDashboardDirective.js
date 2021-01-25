
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


            scope.widgets = [
                {
                    title: "Title 1",
                    sizeX: 3,
                    sizeY: 3,
                    row: 0,
                    col: 0
                }, {
                    title: "Title 2",
                    sizeX: 2,
                    sizeY: 4,
                    row: 0,
                    col: 5
                }


            ];


        }
    };

}]);
