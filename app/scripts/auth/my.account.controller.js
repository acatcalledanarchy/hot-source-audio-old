/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.auth')
		.controller('MyAccountCtrl', MyAccountCtrl);

	MyAccountCtrl.$inject = ['user', '$location', 'Order', 'Auth', 'Product', 'Profile', 'WEBSITE_SETTINGS'];

	function MyAccountCtrl(user, $location, Order, Auth, Product, Profile, WEBSITE_SETTINGS) {

		if(!user) {
			$location.path('/404');
		}
		
		var vm = this;
		vm.isAdmin = Auth.isAdmin;
		vm.products = Product.all;
		vm.productType = WEBSITE_SETTINGS.SHOP.PRODUCT_TYPE;
		vm.productQuantityLabel = WEBSITE_SETTINGS.SHOP.PRODUCT_QUANTITY_LABEL;
		vm.shopTitle = WEBSITE_SETTINGS.SHOP.TITLE;
		vm.signedIn = Auth.signedIn;
		vm.user = Auth.user;
		vm.users = Auth.all;

		vm.orders = {};

		if(Auth.isAdmin) {
			Profile.getOrders(Auth.user.uid).then(function(orders) {
				vm.orders = orders;
			});				
		} else {
			vm.orders = Order.all;
		}

	}

})();