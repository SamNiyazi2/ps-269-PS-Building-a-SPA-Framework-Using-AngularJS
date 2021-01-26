
// 01/26/2021 11:40 am - SSN - [20210126-1137] - [001] - M07-06 - A sign-in page using ngSwitch

"use strict";

angular.module("app").controller("appController", ["$scope", function ($scope) {

    $scope.state = "unauthorized";

    $scope.signIn = () => {

        $scope.state = "authorized";
    };


}]);

