

// 01/25/2021 09:48 am - SSN - [20210125-0944] - [001] - M06-04 - Creating widget custom directives

"use strict";

angular.module('app').directive('wwaTemperature', ["dataService", function (dataService) {

    return {

        templateUrl: "app/widgets/wwaTemperature/wwaTemperatureTemplate.html",

        link: function (scope, elem, attrs) {

            // 01/26/2021 09:21 am - SSN - [20210126-0915] - [001] - M07-03 - Loading indicator for widgets
            scope.isLoaded = false;

            scope.hasError = false;
            scope.simulateError = false;

            scope.selectedLocation = null;

            // 01/26/2021 09:48 am - SSN - [20210126-0946] - [001] - M07-04 - Widget errors
            scope.loadLocation = () => {

                // 01/25/2021 11:25 am - SSN - [20210125-1023] - [002] - M06-05 - Compiling widget content
                scope.hasError = false;
                scope.isLoaded = false;


                dataService.getLocation(scope.item.widgetSettings.id, scope.simulateError)
                    .then(data => {

                        scope.selectedLocation = data;
                        scope.isLoaded = true;
                        scope.hasError = false;


                    }, errorResponse => {
                        scope.hasError = true;
                        console.log('wwaTemperatureDirective - 20210125-1139 - errorResponse ');
                        console.log(errorResponse);
                    })
                    .catch(errorResponse => {

                        scope.hasError = true;
                        console.log('wwaTemperatureDirective - 20210125-1137 - errorResponse ');
                        console.log(errorResponse);

                    });
            }



            scope.doReload = () => {

                //scope.simulateError = false;
                scope.loadLocation();

            }



            scope.loadLocation();


        }

    };


}]);
