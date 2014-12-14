/* jshint latedef: false */
/* jshint camelcase: false */
/* jshint ignore: start */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('OrdersCtrl', OrdersCtrl);

	OrdersCtrl.$inject = ['user', 'orders', 'Auth', 'Profile', 'Order', 'WEBSITE_SETTINGS'];

	function OrdersCtrl(user, orders, Auth, Profile, Order, WEBSITE_SETTINGS) {

		var vm = this;
		vm.orders = orders;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
		vm.user = user;
	}

})();