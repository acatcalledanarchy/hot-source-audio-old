/*jshint latedef: false */

(function() {

    'use strict';

    angular
        .module('app.shop')
        .directive('summary', summary);

    function summary() {

        var directive = {
            restrict : 'E',
            controller : 'CartController',
            scope: {},
            transclude: true,
            templateUrl: 'scripts/shop/summary.html'
        };

        return directive;
    }
    
})();