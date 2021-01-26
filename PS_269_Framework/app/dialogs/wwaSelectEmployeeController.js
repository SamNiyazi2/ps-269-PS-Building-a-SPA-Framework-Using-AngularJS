"use strict";

angular.module('app').controller('wwaSelectEmployeeController', ['$scope', 'dataService', function ($scope, dataService) {

    

// 01/25/2021 06:42 pm - SSN - [20210125-1825] - [002] - M06-12 - Updating widget settings 

     
    $scope.isLoaded = false;

    dataService.getEmployees().then((data) => {

        $scope.employees = data;
        $scope.isLoaded = true;
         
        angular.forEach(data, entry1 => {

            if (entry1.id == $scope.item.widgetSettings.id) {
                $scope.selectedEmployee = entry1;
            }
        });

    });



    $scope.saveSettings = () => {
        
        $scope.item.widgetSettings.id = $scope.selectedEmployee.id;
        $scope.$parent.selectedEmployee = $scope.selectedEmployee;

        $scope.$close();

    };

    

}]);