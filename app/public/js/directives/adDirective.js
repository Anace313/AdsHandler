'use strict';

angular.module('adsHandlerApp')
    .directive('ad', function () {
        return {
            restrict: "E",
            scope: {
                ad: '@'
            },
            replace: true,
            templateUrl: '/views/directives/adDirective.html',
            controller: 'adDirectiveController'
        }
    });