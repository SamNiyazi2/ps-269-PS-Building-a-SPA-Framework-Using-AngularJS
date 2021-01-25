"use strict";

angular.module('app').directive('wwaInventory', ['dataService', function (dataService) {

    return {
        templateUrl: 'app/widgets/wwaInventory/wwaInventoryTemplate.html',
        link: function (scope, el, attrs) {


            // 01/25/2021 11:25 am - SSN - [20210125-1023] - [002] - M06-05 - Compiling widget content


            dataService.getLocation(scope.item.widgetSettings.id)
                .then(data => {

                    scope.selectedLocation = data;

                }, errorResponse => {

                    console.log('wwaTemperatureDirective - 20210125-1210 - errorResponse ');
                    console.log(errorResponse);
                })
                .catch(errorResponse => {

                    console.log('wwaTemperatureDirective - 20210125-1211 - errorResponse ');
                    console.log(errorResponse);

                });
        }
    };
}]);