/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.auth')
		.factory('Profile', Profile);

	Profile.$inject = ['$window', 'FIREBASE_URL', '$firebase', 'Order', '$q'];

	function Profile($window, FIREBASE_URL, $firebase, Order, $q) {

		var ref = new $window.Firebase(FIREBASE_URL);

		var profile = {
			get: function (userId) {
				return $firebase(ref.child('profile').child(userId)).$asObject();
			},
			getOrders: function(userId) {
				var defer = $q.defer();
				$firebase(ref.child('user_orders').child(userId))
				.$asArray()
				.$loaded()
				.then(function(data) {
					var orders = {};
					for(var i = 0; i<data.length; i++) {
						var value = data[i].$value;
						orders[value] = Order.get(value);
					}
					defer.resolve(orders);
				});
				return defer.promise;
			}
		};

		return profile;
	}	
})();