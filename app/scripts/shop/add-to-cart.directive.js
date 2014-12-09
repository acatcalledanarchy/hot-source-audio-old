/*jshint latedef: false*/

(function() {

	'use strict';

	angular
		.module('app.shop')
		.directive('addToCart', addToCart);

	addToCart.$inject = ['ngCart'];

	function addToCart(ngCart) {
        
        var directive = {
            controller: 'CartController',
            link: link,
            scope: {
                id: '@',
                name: '@',
                quantity: '@',
                price: '@',
                productType: '@',
                data: '='
            },
            restrict: 'AE',
            transclude: true,
            templateUrl: 'scripts/shop/add-to-cart.html'
        };

        return directive;

        function link(scope, element, attrs) {
            scope.attrs = attrs;
            scope.inCart = function(){
                return ngCart.itemInCart(attrs.id);
            };
        }
    }
    
})();