
// 01/24/2021 06:46 pm - SSN - [20210124-1839] - [001] - M05-03 - Setting up routing

"use strict";

angular.module("app").config(["$routeProvider", function ($routeProvider) {

    var routes = [

        {
            url: '/dashboard',
            config: {
                template: '<wwa-dashboard></wwwa-dashboard>'
            }
        },
        {
            url: '/locations',
            config: {
                template: '<wwa-locations></wwa-locations>'
            }
        },
        {
            url: '/guides',
            config: {
                template: '<wwa-guides></www-guides>'
            }
        }
    ];


    routes.forEach(function (route) {

        $routeProvider.when(route.url, route.config);

    });


    $routeProvider.otherwise({ redirectTo: '/dashboard' });


}]);



