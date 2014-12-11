/* jshint latedef: false */
/* jshint camelcase: false */
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
					$firebase(ref.child('user_products').child(product.creator_uid)).$push(productRef.name());
					return productRef;
				});
			},
			delete: function(product) {
				return products.$remove(product);
			},
			get: function(productId) {
				return $firebase(ref.child('products').child(productId)).$asObject();
			},
			getAll: function() {
				return products.$asArray();
			},
			update: function(product) {
				return product.$save();
			}
		};

		return product;	
	}

})();