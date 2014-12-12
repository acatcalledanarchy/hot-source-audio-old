/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.shop')
		.controller('ProductCtrl', ProductCtrl);

	ProductCtrl.$inject = ['$scope', 'Auth', 'Product', 'WEBSITE_SETTINGS', '$state', '$stateParams'];

	function ProductCtrl($scope, Auth, Product, WEBSITE_SETTINGS, $state, $stateParams) {

		var vm = this;
		vm.product = Product.get($stateParams.productId);
		vm.signedIn = Auth.signedIn;
		vm.user = Auth.user;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();