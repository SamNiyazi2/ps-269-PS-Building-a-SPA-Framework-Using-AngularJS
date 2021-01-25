"use strict";

angular.module('app').directive('wwaEmployee', ['dataService', function (dataService) {

    return {
        templateUrl: 'app/widgets/wwaEmployee/wwaEmployeeTemplate.html',
        link: function (scope, el, attrs) {


            // 01/25/2021 12:10 pm - SSN - [20210125-1023] - [004] - M06-05 - Compiling widget content


            dataService.getEmployee(scope.item.widgetSettings.id)
                .then(data => {

                    scope.selectedEmployee = data;

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