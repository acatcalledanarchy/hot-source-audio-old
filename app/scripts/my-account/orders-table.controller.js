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

		/*if(vm.user.is_admin) {
			console.log('Admin');
			console.log(orders);
			for(var i = 0; i < orders.length; i++) {
				Auth.get(orders[i].creator_uid).then(function(profile) {
					orders[i].profile = profile;
				});
			}
			vm.orders = orders;		
			console.log(vm.orders);	
		} else {
			console.log('Customer');
			console.log(orders);
			Profile.getOrders(vm.user.$id).then(function(orders) {
				vm.orders = orders;
				console.log(orders);
			});
		}*/
	}

})();