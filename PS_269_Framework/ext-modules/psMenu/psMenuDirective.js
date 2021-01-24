
// 01/23/2021 12:05 pm - SSN - [20210123-1205] - [001] - M03-03 - Menu custom directives

"use strict";

angular.module("psMenu").directive("psMenu", ["$timeout", function ($timeout) {

    return {
        // restrict: 'AE',
        // Isolated scope
        scope: {

        },
        transclude: true,
        templateUrl: 'ext-modules/psMenu/psMenuTemplate.html',
        controller: 'psMenuController',
        link: function (scope, el, attr) {

            // 01/24/2021 04:55 pm - SSN - [20210124-1536] - [001] - M04-10 - Making the menu responsive
            // Setting a default menu item:
            var item = el.find('.ps-selectable-item:first');

            if (item.length > 0) {

                $timeout(() => {
                    item.trigger('click');
                });

            }

        }
    };



}]);
