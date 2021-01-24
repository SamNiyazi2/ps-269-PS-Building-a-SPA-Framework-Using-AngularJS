
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

                // 01/24/2021 02:56 pm - SSN - [20210124-1445] - [003] - M04-09 - Controlling the popup menu
                if (scope.isOpen && el.parents('.ps-subitem-section').length == 0) {
                    scope.setSubmenuPosition();
                }

                // 01/24/2021 03:20 pm - SSN - [20210124-1445] - [005] - M04-09 - Controlling the popup menu
                ctrl.setOpenMenuScope(scope);

            }

            // 01/24/2021 02:57 pm - SSN - [20210124-1445] - [004] - M04-09 - Controlling the popup menu
            scope.setSubmenuPosition = function () {

                var pos = el.offset();

                $('.ps-subitem-section').css({ 'left': pos.left + 20, 'top': 36 });
            }


            // 01/24/2021 02:14 pm - SSN - [20210124-1349] - [003] - M04-07 - Styling the horizontal menu 
            scope.isVertical = function () {

                // 01/24/2021 02:55 pm - SSN - [20210124-1445] - [002] - M04-09 - Controlling the popup menu
                return ctrl.isVertical() || el.parents('.ps-subitem-section').length > 0;
            }

        }
    }

});
