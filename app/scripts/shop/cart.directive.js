/*jshint latedef: false*/

(function() {

	'use strict';

	angular
		.module('app.shop')
		.directive('cart', cart);

	function cart() {

        var directive = {
            scope: {
                baseUrl: '@',
                signedIn: '@',
                userProfile: '=',
                websiteSettings: '='
            },
            restrict : 'AE',
            controller : 'CartController',
            templateUrl: 'scripts/shop/cart.html'
        };

        return directive;
    }
    
})();