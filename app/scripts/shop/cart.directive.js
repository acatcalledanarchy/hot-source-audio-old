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
                fontAwesomeIcon: '@',
                payPalEmailAddress: '@',
                shopTitleSlug: '@',
                signedIn: '@',
                userMd5Hash: '@',
                websiteLogo: '@'
            },
            restrict : 'AE',
            controller : 'CartController',
            templateUrl: 'scripts/shop/cart.html'
        };

        return directive;
    }
    
})();