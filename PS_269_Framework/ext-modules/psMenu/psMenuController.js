

// 01/23/2021 12:08 pm - SSN - [20210123-1205] - [002] - M03-03 - Menu custom directives

"use strict";

angular.module("psMenu").controller("psMenuController", ["$scope", "$rootScope", function ($scope, $rootScope) {


    $scope.showMenu = true;


    this.getActiveElement = function () {
        return $scope.activeElement;
    }


    this.setActiveElement = function (el) {

        $scope.activeElement = el;

    };


    this.setRoute = function (route) {

        $rootScope.$broadcast('ps-menu-item-selected-event', { route_selected: route });

    };


    $scope.$on('ps-menu-show', function (evt, data) {

        $scope.showMenu = data.show;

    });



}]);


