
// 01/22/2021 07:17 pm - SSN - [20210122-1915] - [001] -  M02-05 - Building our framework 

"use strict";

angular.module("psFramework").directive("psFramework", function () {


    return {
        transclude: true,
        scope: {
            // 01/23/2021 10:30 am - SSN - [20210123-1024] - [001] - M02-09 - Passing a value to an isolated scope
            title: '@',
            subtitle: '@',
            iconFile: '@',
        },
        controller: "psFrameworkController",
        templateUrl: "ext-modules/psFramework/psFrameworkTemplate.html"
    }

});
