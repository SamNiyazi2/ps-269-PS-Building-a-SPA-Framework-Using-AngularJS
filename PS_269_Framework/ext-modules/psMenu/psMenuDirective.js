
// 01/23/2021 12:05 pm - SSN - [20210123-1205] - [001] - M03-03 - Menu custom directives

"use strict";

angular.module("psMenu").directive("psMenu", function () {

    return {
        // restrict: 'AE',
        transclude: true,
        templateUrl: 'ext-module/psMenu/psMenuTemplate.html',
        controller: 'psMenuController',
        link: function (scope, el, attr) {


        }
    };

});
