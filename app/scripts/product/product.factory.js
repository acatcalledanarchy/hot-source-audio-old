/* jshint latedef: false */
/* jshint camelcase: false */
/* global Firebase */

(function() {

	'use strict';

	angular
		.module('app.shop')
		.factory('Product', Product);

	Product.$inject = ['$firebase', 'FIREBASE_URL', 'WEBSITE_SETTINGS'];

	function Product($firebase, FIREBASE_URL, WEBSITE_SETTINGS) {

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
			convertToEvents: function() {
				return product.all.$loaded().then(function(products) {
					var events = [];
					for(var i = 0; i < products.length; i++) {
						var product = products[i],
							title = product.name,
							day = product.date.replace( /(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'),
							data = {
								title: title,
								start: new Date(day + ' ' + products[i].start_time),
								end: new Date(day + ' ' + products[i].end_time),
								allDay: false,
								description: product.description + '. Click to view, or book a ' + WEBSITE_SETTINGS.SHOP.PRODUCT_TYPE.toLowerCase(),
								url: '/#/' + WEBSITE_SETTINGS.SHOP.TITLE.toLowerCase() + '/' + product.$id
							};
						events.push(data);
					}
					return [{ color: '#4EBBEE',
							  textColor: 'white',
							  events: events }];
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
			},
			updateQuantity: function(productId) {
				var productRef = $firebase(ref.child('products').child(productId)).$asObject();
				productRef.$loaded().then(function(thisProduct) {
					thisProduct.quantity = thisProduct.quantity - 1;
					product.update(thisProduct);
				});
			}
		};

		return product;	
	}

})();