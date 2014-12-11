/* jshint latedef: false */
/* jshint camelcase: false */
/* global Firebase */

(function() {

	'use strict';

	angular
		.module('app.shop')
		.factory('Order', Order);

	Order.$inject = ['$firebase', 'FIREBASE_URL', 'ngCart', 'Auth'];

	function Order($firebase, FIREBASE_URL, ngCart, Auth) {

		var ref	= new Firebase(FIREBASE_URL);
		var orders = $firebase(ref.child('orders')).$asArray();
		
		var order = {
			all: orders,
			create: function() {
				/* Need to decrease quantity by 1 for relevant products */
				var products = ngCart.getCart().items,
					taxRate = !ngCart.getCart().tax,
					order = {
						creatorUID: Auth.user.uid,
						products: [],
						totalCost: ngCart.totalCost(),
						totalTax: ngCart.getTax(),
						taxRate: taxRate,
						orderTime: new Date().getTime()
				};
				for( var i in products ) {
					var product = {
						name: products[i]._name,
						quantity: products[i]._quantity,
						price: products[i]._price
					};
					order.products.push(product);
				}
				console.log(orders);
				return orders.$add(order).then(function(orderRef) {
					$firebase(ref.child('user_orders').child(order.creatorUID)).$push(orderRef.name());
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