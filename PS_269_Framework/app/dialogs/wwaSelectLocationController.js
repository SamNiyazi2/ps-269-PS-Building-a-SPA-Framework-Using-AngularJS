"use strict";

angular.module('app').controller('wwaSelectLocationController', ['$scope', 'dataService', function ($scope, dataService) {

    // 01/25/2021 06:27 pm - SSN - [20210125-1825] - [001] - M06-12 - Updating widget settings 

    
    $scope.isLoaded = false;

    dataService.getLocations().then((data) => {

        $scope.locations = data;
        $scope.isLoaded = true;
        
        angular.forEach(data, entry1 => {

            if (entry1.id == $scope.item.widgetSettings.id) {
                $scope.selectedLocation = entry1;
            }
        });

    });



    $scope.saveSettings = () => {
        
        $scope.item.widgetSettings.id = $scope.selectedLocation.id;
        $scope.$parent.selectedLocation = $scope.selectedLocation;

        $scope.$close();

    };



}]);