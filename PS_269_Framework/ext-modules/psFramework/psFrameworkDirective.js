
// 01/22/2021 07:17 pm - SSN - [20210122-1915] - [001] -  M02-05 - Building our framework 

"use strict";

angular.module("psFramework").directive("psFramework", function () {


    return {
        transclude: true,
        scope: {

        },
        controller: "psFrameworkController",
        templateUrl: "ext-modules/psFramework/psFrameworkTemplate.html"
    }

});
