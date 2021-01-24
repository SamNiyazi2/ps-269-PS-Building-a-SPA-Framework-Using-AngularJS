

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


    $scope.$on('ps-menu-show', function (evt, data) {

        $scope.showMenu = data.show;

    });


    // 01/24/2021 01:37 pm - SSN - [20210124-1314] - [001] - M04-06 - Creating a horizontal menu
    $scope.toggleMenuOrientation = function () {
        $scope.isVertical = !$scope.isVertical;
        console.log('psMenuController:toggleMenuOrientation - 20210124-1346');
        $rootScope.$broadcast('ps-menu-orientation-changed-event', {
            isMenuVertical: $scope.isVertical
        });
    };



}]);


