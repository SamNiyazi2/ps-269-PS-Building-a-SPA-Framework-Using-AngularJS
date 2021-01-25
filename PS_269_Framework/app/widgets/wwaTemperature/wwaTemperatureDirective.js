﻿

// 01/25/2021 09:48 am - SSN - [20210125-0944] - [001] - M06-04 - Creating widget custom directives

"use strict";

angular.module('app').directive('wwaTemperature', ["dataService", function (dataService) {

    return {

        templateUrl: "app/widgets/wwaTemperature/wwaTemperatureTemplate.html",

        link: function (scope, elem, attrs) {

            // 01/25/2021 11:25 am - SSN - [20210125-1023] - [002] - M06-05 - Compiling widget content


            dataService.getLocation(scope.item.widgetSettings.id)
                .then(data => {

                    scope.selectedLocation = data;

                }, errorResponse => {

                    console.log('wwaTemperatureDirective - 20210125-1139 - errorResponse ');
                    console.log(errorResponse);
                })
                .catch(errorResponse => {

                    console.log('wwaTemperatureDirective - 20210125-1137 - errorResponse ');
                    console.log(errorResponse);

                });

        }

    };


}]);