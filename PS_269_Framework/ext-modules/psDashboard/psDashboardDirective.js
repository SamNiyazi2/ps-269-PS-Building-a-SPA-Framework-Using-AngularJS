
// 01/25/2021 07:29 am - SSN - [20210125-0706] - [001] - M05-07 - Dashboard creation

angular.module('psDashboard').directive('psDashboard', function () {

    return {

        templateUrl: 'ext-modules/psDashboard/psDashboardTemplate.html',

        link: function (scope) {


            // 01/25/2021 01:48 pm - SSN - [20210125-1346] - [001] - M06-08 - Adding widgets to a dashboard
            scope.addNewWidget = function (widget) {

                let newWidget = angular.copy(widget.settings);

                scope.widgets.push(newWidget);

            };


        }

    };

});
