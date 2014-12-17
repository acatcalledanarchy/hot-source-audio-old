/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.shop')
		.controller('ProductCtrl', ProductCtrl);

	ProductCtrl.$inject = ['user', 'Product', '$state', '$stateParams', 'WEBSITE_SETTINGS'];

	function ProductCtrl(user, Product, $state, $stateParams, WEBSITE_SETTINGS) {

		var vm = this;
		vm.product = Product.get($stateParams.productId);
		vm.user = user;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();