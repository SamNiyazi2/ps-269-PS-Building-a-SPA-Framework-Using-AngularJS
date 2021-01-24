
// 01/24/2021 12:39 pm - SSN - [20210124-1238] - [001] - M04-03 - A custom directive for groups

'use strict';

angular.module('psMenu').directive('psMenuGroup', function () {

    return {

        require: '^psMenu',
        transclude: true,
        scope: {
            label: '@',
            icon: '@'
        },
        templateUrl: 'ext-modules/psMenu/psMenuGroupTemplate.html',
        link: function (scope, el, attrs, ctrl) {

            scope.isOpen = false;


            scope.closeMenu = function () {
                scope.isOpen = false;
            }


            scope.clicked = function () {
                scope.isOpen = !scope.isOpen;
            }


            // 01/24/2021 02:14 pm - SSN - [20210124-1349] - [003] - M04-07 - Styling the horizontal menu 
            scope.isVertical = function () {

                return ctrl.isVertical();
            }

        }
    }

});
