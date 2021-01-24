
// 01/22/2021 07:21 pm - SSN - [20210122-1915] - [002] -  M02-05 - Building our framework 

"use strict";

angular.module("psFramework").controller("psFrameworkController", ["$scope", "$window", "$timeout", "$rootScope", function ($scope, $window, $timeout, $rootScope) {

    $scope.isMenuVisible = false;
    $scope.isMenuButtonVisible = false;

    $scope.$on('ps-menu-item-selected-event', function (evt, data) {

        $scope.routeString = data.route_selected;
        checkWidth();
        //broadcastMenuState();

    });


    $($window).on('resize.psFramework', function () {

        $scope.$apply(function () {

            checkWidth();

        });

    });


    $scope.$on("$destroy", function () {

        $($window).off("resize.psFramework");

    });


    var checkWidth = function () {

        var width = Math.max($($window).width(), $window.innerWidth);

        $scope.isMenuVisible = (width >= 768);
        $scope.isMenuButtonVisible = !$scope.isMenuVisible;

        broadcastMenuState();
    };


    $scope.menuButtonClicked = function () {

        $scope.isMenuVisible = !$scope.isMenuVisible;

        broadcastMenuState();

    }


    var broadcastMenuState = function () {

        $rootScope.$broadcast('ps-menu-show', {
            show: $scope.isMenuVisible
        });

    };



    $timeout(() => checkWidth(), 0);

}]);

