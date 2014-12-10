/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('MyAccountCtrl', MyAccountCtrl);

	MyAccountCtrl.$inject = ['user', '$location', 'Auth', 'WEBSITE_SETTINGS'];

	function MyAccountCtrl(user, $location, Auth, WEBSITE_SETTINGS) {

		if (!user) {
			$location.path('/404');
		}
		
		var vm = this;
		vm.isAdmin = Auth.isAdmin;
		vm.productOrderLabel = WEBSITE_SETTINGS.SHOP.PRODUCT_ORDER_LABEL;
		vm.shopTitle = WEBSITE_SETTINGS.SHOP.TITLE;
		vm.signedIn = Auth.signedIn;
		vm.user = user;
	}

})();