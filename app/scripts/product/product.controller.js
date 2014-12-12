/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.shop')
		.controller('ProductCtrl', ProductCtrl);

	ProductCtrl.$inject = ['$scope', 'Auth', 'Product', 'WEBSITE_SETTINGS', '$state', '$stateParams'];

	function ProductCtrl($scope, Auth, Product, WEBSITE_SETTINGS, $state, $stateParams) {

		var vm = this;
		vm.fontIcon = WEBSITE_SETTINGS.SHOP.FONT_ICON;

console.log(vm.fontIcon);

		vm.product = Product.get($stateParams.productId);
		vm.productType = WEBSITE_SETTINGS.SHOP.PRODUCT_TYPE;
		vm.productQuantityLabel = WEBSITE_SETTINGS.SHOP.PRODUCT_QUANTITY_LABEL;
		vm.shopTitle = WEBSITE_SETTINGS.SHOP.TITLE;
		vm.signedIn = Auth.signedIn;
		vm.user = Auth.user;
	}

})();