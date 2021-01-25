
// 01/25/2021 07:29 am - SSN - [20210125-0706] - [001] - M05-07 - Dashboard creation

angular.module('psDashboard').directive('psDashboard', function () {

    return {

        templateUrl: 'ext-modules/psDashboard/psDashboardTemplate.html',

        link: function (scope) {

            scope.widgets = [
                {
                    sizeX: 3,
                    sizeY: 3,
                    row: 0,
                    col:0
                }, {
                    sizeX: 2,
                    sizeY: 4,
                    row: 0,
                    col: 5
                }


            ];


        }

    };

});
