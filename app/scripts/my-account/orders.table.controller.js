/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('OrdersCtrl', OrdersCtrl);

	OrdersCtrl.$inject = ['Auth', 'Profile', 'Order', 'WEBSITE_SETTINGS'];

	function OrdersCtrl(Auth, Profile, Order, WEBSITE_SETTINGS) {

		var vm = this;
		vm.isAdmin = Auth.isAdmin;
		vm.productType = WEBSITE_SETTINGS.SHOP.PRODUCT_TYPE;

		if (Auth.isAdmin) {	
			vm.orders = Order.all;
			vm.orders.$loaded().then(function(orders) {
				for(var i = 0; i < orders.length; i++) {
					var profile = Auth.get(orders[i].creatorUID);
					orders[i].profile = profile;
				}
				vm.orders = orders;
			});				
		} else {
			console.log('Auth user UID: ' + Auth.user.uid);
			Profile.getOrders(Auth.user.uid).then(function(orders) {
				vm.orders = orders;
				console.log(vm.orders);
			});
		}
	}

})();