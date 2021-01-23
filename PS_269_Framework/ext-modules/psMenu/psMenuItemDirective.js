

// 01/23/2021 12:17 pm - SSN - [20210123-1215] - [001] - M03-04 - A menu item custom directive

"use strict";

angular.module("psMenu").directive("psMenuItem", function () {

    return {
        require: '^psMenu',
        // Isolated scope
        scope: {
            label: '@',
            icon: '@',
            route: '@'
        },
        templateUrl: 'ext-modules/psMenu/psMenuItemTemplate.html',
        link: function (scope, el, attr, ctrl) {

            el.on('click', function (evt) {



                evt.stopPropagation();
                evt.preventDefault();

                scope.$apply(function () {

                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);

                });


            });

        }
    };

});

