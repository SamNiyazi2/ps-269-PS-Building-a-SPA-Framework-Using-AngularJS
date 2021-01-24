
// 01/22/2021 07:21 pm - SSN - [20210122-1915] - [002] -  M02-05 - Building our framework 

"use strict";

angular.module("psFramework").controller("psFrameworkController", ["$scope", "$window", "$timeout", "$rootScope", function ($scope, $window, $timeout, $rootScope) {

    $scope.isMenuVisible = false;
    $scope.isMenuButtonVisible = false;

    // 01/24/2021 01:43 pm - SSN - [20210124-1314] - [002] - M04-06 - Creating a horizontal menu
    $scope.isMenuVertical = true;


    $scope.$on('ps-menu-item-selected-event', function (evt, data) {

        $scope.routeString = data.route_selected;
        checkWidth();

    });


    // 01/24/2021 01:44 pm - SSN - [20210124-1314] - [003] - M04-06 - Creating a horizontal menu
    $scope.$on('ps-menu-orientation-changed-event', function (evt, data) {

        console.log('psFrameworkController: on ps-menu-orientation-changed-event 20210124-1347')
        console.log(data);

        $scope.isMenuVertical = data.isMenuVertical;

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

