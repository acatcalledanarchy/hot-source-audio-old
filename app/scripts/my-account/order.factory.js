/* jshint latedef: false */
/* jshint camelcase: false */
/* global Firebase */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.factory('Order', Order);

	Order.$inject = ['$firebase', 'FIREBASE_URL', 'ngCart', 'Auth', 'Product'];

	function Order($firebase, FIREBASE_URL, ngCart, Auth, Product) {

		var ref	= new Firebase(FIREBASE_URL);
		var orders = $firebase(ref.child('orders')).$asArray();
		
		var order = {
			all: orders,
			create: function() {
				var products = ngCart.getCart().items,
					taxRate = !ngCart.getCart().tax,
					order = {
						creator_uid: Auth.user.uid,
						products: [],
						total_cost: ngCart.totalCost(),
						total_tax: ngCart.getTax(),
						tax_rate: taxRate,
						order_time: new Date().getTime()
				};
				for( var i in products ) {
					var productId = products[i]._id,
						cartProduct = {
							name: products[i]._name,
							quantity: products[i]._quantity,
							price: products[i]._price
						};
					order.products.push(cartProduct);
					Product.updateQuantity(productId);
				}
				return orders.$add(order).then(function(orderRef) {
					$firebase(ref.child('user_orders').child(order.creator_uid)).$push(orderRef.name());
					return orderRef;
				});
			},
			get: function(orderId) {
				return $firebase(ref.child('orders').child(orderId)).$asObject();
			},
			update: function(order) {
				return order.$save();
			},
			delete: function(order) {
				return orders.$remove(order);
			}
		};
		return order;	
	}

})();