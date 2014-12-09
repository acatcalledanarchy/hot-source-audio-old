/* jshint latedef: false */
/* global Firebase */

(function() {

	'use strict';

	angular
		.module('app.shop')
		.factory('Product', Product);

	Product.$inject = ['$firebase', 'FIREBASE_URL'];

	function Product($firebase, FIREBASE_URL) {

		var ref	= new Firebase(FIREBASE_URL);
		var products = $firebase(ref.child('products')).$asArray();
		
		var product = {
			all: products,
			create: function(product) {
				return products.$add(product).then( function(productRef) {
					$firebase(ref.child('user_products').child(product.creatorUID)).$push(productRef.name());
					return productRef;
				});
			},
			get: function(productId) {
				return $firebase(ref.child('products').child(productId)).$asObject();
			},
			update: function(product) {
				return product.$save();
			},
			delete: function(product) {
				return products.$remove(product);
			},
			getAll: function() {
				return products.$asArray();
			}
		};

		return product;	
	}

})();