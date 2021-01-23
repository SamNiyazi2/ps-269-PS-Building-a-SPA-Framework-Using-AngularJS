
// 01/22/2021 07:21 pm - SSN - [20210122-1915] - [002] -  M02-05 - Building our framework 

"use strict";

angular.module("psFramework").controller("psFrameworkController", ["$scope", function ($scope) {

    $scope.isMenuButtonVisible = true;

    $scope.$on('ps-menu-item-selected-event', function (evt, data) {

        console.log('ps-menu-item-selected-event - listener - 20210123-1328');
        console.log(evt);
        console.log(data);

        $scope.routeString = data.route_selected;

    });


}]);

