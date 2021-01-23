

// 01/23/2021 12:17 pm - SSN - [20210123-1215] - [001] - M03-04 - A menu item custom directive

"use strict";

angular.module("psMenu").directive("psMenuItem", function () {

    return {
        require: '^psMenu',
        // Isolated scope
        scope: {
            label: '@',
            icon:'@'
        },
        templateUrl: 'ext-modules/psMenu/psMenuItemTemplate.html',
        link: function (scope, el, attr, ctrl) {

        }
    };

});

