

// 01/25/2021 09:48 am - SSN - [20210125-0944] - [001] - M06-04 - Creating widget custom directives

"use strict";

angular.module('app').directive('wwaTemperature', ["dataService", function (dataService) {

    return {

        templateUrl: "app/widgets/wwaTemperature/wwaTemperatureTemplate.html",

        link: function (scope, elem, attrs) {

        }

    };


});
