
// 01/23/2021 10:42 am - SSN - [20210123-1034] - [001] - M02-10 - Catching exceptions

'use strict';



angular.module('app').config(function ($provide) {

    // https://docs.angularjs.org/api/auto/service/$provide

    $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {

        return function (exception, cause) {
            console.log('20210123-1137: $exceptionHandler:');
            console.log(exception);
            console.log(cause);

            $delegate(exception, cause);

            console.log('1-----------------------------------------------------');
            console.log('2-----------------------------------------------------');
            console.log('3-----------------------------------------------------');

            alert(exception.message);


        };

    }]);


});

