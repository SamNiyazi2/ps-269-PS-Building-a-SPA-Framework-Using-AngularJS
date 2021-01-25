
// 01/22/2021 07:21 pm - SSN - [20210122-1915] - [002] -  M02-05 - Building our framework 

"use strict";

angular.module("psFramework").controller("psFrameworkController", ["$scope", "$window", "$timeout", "$rootScope", "$location", function ($scope, $window, $timeout, $rootScope, $location) {

    $scope.isMenuVisible = false;
    $scope.isMenuButtonVisible = false;

    // 01/24/2021 01:43 pm - SSN - [20210124-1314] - [002] - M04-06 - Creating a horizontal menu
    $scope.isMenuVertical = true;


    $scope.$on('ps-menu-item-selected-event', function (evt, data) {

        $scope.routeString = data.route_selected;

        // 01/24/2021 07:22 pm - SSN - [20210124-1856] - [002] - M05-04 - Routing to custom directive

        $location.path(data.route_selected);

        doCheckWidth('ps-menu-item-selected-event');


    });



    // 01/24/2021 01:44 pm - SSN - [20210124-1314] - [003] - M04-06 - Creating a horizontal menu
    $scope.$on('ps-menu-orientation-changed-event', function (evt, data) {

        $scope.isMenuVertical = data.isMenuVertical;

        doCheckWidth('ps-menu-orientation-changed-event', 700);

    });


    $($window).on('resize.psFramework', function () {

        $scope.$apply(function () {

            // checkWidth();
            doCheckWidth('resize.psFramework');

        });

    });


    $scope.$on("$destroy", function () {

        $($window).off("resize.psFramework");

    });




    let doCheckWidth = function (caller, timeoutDefault = 20) {

        console.log("doCheckWidth:");
        console.log('Caller: [', caller, ']');
        console.log('timeoutDefault: [', timeoutDefault, ']');

        $timeout(() => {

            $scope.$apply(function () {

                checkWidth();

            });

        }, timeoutDefault);

    }

    var checkWidth = function () {

        var width = Math.max($($window).width(), $window.innerWidth);

        $scope.isMenuVisible = (width >= 768);
        $scope.isMenuButtonVisible = !$scope.isMenuVisible;

        let ps_title_bar_height = $('.ps-title-bar').height();
        let ps_menu_area_height = $('.ps-menu-area').height();

        let totalHeight = ps_title_bar_height;

        console.log('ps_menu_area_height :');
        console.log(ps_menu_area_height, $scope.isMenuVisible, $scope.isMenuVertical);

        if ((!$scope.isMenuVertical && $scope.isMenuVisible))
            totalHeight += ps_menu_area_height;

        let string1 = 'calc( 100vh - ' + ((totalHeight + 2) + 'px') + ')';
        console.log('string1:');
        console.log(string1);

        $('.ps-view').css({ 'minHeight': string1 });

        broadcastMenuState();
    };


    $scope.menuButtonClicked = function () {

        $scope.isMenuVisible = !$scope.isMenuVisible;

        broadcastMenuState();

    }


    var broadcastMenuState = function () {

        $rootScope.$broadcast('ps-menu-show', {
            show: $scope.isMenuVisible,
            allowHorizontalToggle: !$scope.isMenuButtonVisible
        });

    };



    $timeout(() => checkWidth(), 0);

}]);

