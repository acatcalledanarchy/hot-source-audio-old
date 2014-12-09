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
				vm.orders = orders;
			});				
		} else {
			Profile.getOrders(Auth.user.uid).then(function(orders) {
				vm.orders = orders;
			});
		}
	}

})();