/* jshint latedef: false */
/* jshint camelcase: false */

(function(){

	'use strict';

	angular
		.module('app.shop')
		.controller('PaymentCompletedCtrl', PaymentCompletedCtrl);

	PaymentCompletedCtrl.$inject = ['user', '$location', 'Auth', 'ngCart', 'Order', 'WEBSITE_SETTINGS', '$state', '$stateParams'];

	function PaymentCompletedCtrl(user, $location, Auth, ngCart, Order, WEBSITE_SETTINGS, $state, $stateParams) {

		var userId = $stateParams.userId;

		if(!user || userId !== user.md5_hash || ngCart.totalItems() === 0) {
			$location.path('/404');
		} else {	
			var vm = this;
			vm.createOrder = createOrder;
			vm.user = user;
			vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
			activate();
		}
		
		function activate() {
			createOrder();
		}

		function createOrder() {
			Order.create().then(function() {
				ngCart.empty();
			}, function(error) {
				vm.orderError = error.toString();
			});
		}
	}

})();