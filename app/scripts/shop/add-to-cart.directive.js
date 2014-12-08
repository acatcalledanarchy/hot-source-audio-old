/*jshint latedef: false*/

(function() {

	'use strict';

	angular
		.module('app.shop')
		.directive('addToCart', addToCart);

	addToCart.$inject = ['ngCart'];

	function addToCart(ngCart) {
        
        var directive = {
            restrict: 'E',
            controller: 'CartController',
            scope: {
                id: '@',
                name: '@',
                quantity: '@',
                price: '@',
                productType: '@',
                data: '='
            },
            transclude: true,
            templateUrl: 'scripts/shop/add-to-cart.html',
            link: link
        };

        return directive;

        /*---------------------------------------------*/

        function link(scope, element, attrs) {
            scope.attrs = attrs;
            scope.inCart = function(){
                return ngCart.itemInCart(attrs.id);
            };
        }
    }
    
})();