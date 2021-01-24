

// 01/23/2021 12:08 pm - SSN - [20210123-1205] - [002] - M03-03 - Menu custom directives

"use strict";

angular.module("psMenu").controller("psMenuController", ["$scope", "$rootScope", function ($scope, $rootScope) {


    $scope.showMenu = true;
    $scope.isVertical = true;

    this.getActiveElement = function () {
        return $scope.activeElement;
    }


    this.setActiveElement = function (el) {

        $scope.activeElement = el;

    };


    // 01/24/2021 02:08 pm - SSN - [20210124-1349] - [002] - M04-07 - Styling the horizontal menu 
    this.isVertical = function () {

        return $scope.isVertical;
    }


    this.setRoute = function (route) {

        $rootScope.$broadcast('ps-menu-item-selected-event', { route_selected: route });

    };


    // 01/24/2021 03:23 pm - SSN - [20210124-1445] - [006] - M04-09 - Controlling the popup menu
    this.setOpenMenuScope = function (scope) {
        $scope.openMenuScope = scope
    }


    $scope.$on('ps-menu-show', function (evt, data) {

        $scope.showMenu = data.show;

    });


    // 01/24/2021 01:37 pm - SSN - [20210124-1314] - [001] - M04-06 - Creating a horizontal menu
    $scope.toggleMenuOrientation = function () {


        // 01/24/2021 03:25 pm - SSN - [20210124-1445] - [007] - M04-09 - Controlling the popup menu
        if ($scope.openMenuScope) {
            $scope.openMenuScope.closeMenu();
        }

        $scope.isVertical = !$scope.isVertical;

        $rootScope.$broadcast('ps-menu-orientation-changed-event', {
            isMenuVertical: $scope.isVertical
        });



        // 01/24/2021 03:25 pm - SSN - [20210124-1445] - [008] - M04-09 - Controlling the popup menu
        angular.element(document).bind('click', function (e) {


            if ($scope.openMenuScope && !$scope.isVertical) {

                if ($(e.target).parent().hasClass('ps-selectable-item')) return;

                $scope.$apply(function () {

                    $scope.openMenuScope.closeMenu();

                });

                e.preventDefault();
                e.stopPropagation();

            }

        });



    };



}]);


