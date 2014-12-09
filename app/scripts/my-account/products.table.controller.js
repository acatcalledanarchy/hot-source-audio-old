/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('ProductsCtrl', ProductsCtrl);

	ProductsCtrl.$inject = ['Product', 'WEBSITE_SETTINGS'];

	function ProductsCtrl(Product, WEBSITE_SETTINGS) {

		var vm = this;
		vm.products = Product.all;
		vm.productType = WEBSITE_SETTINGS.SHOP.PRODUCT_TYPE;
		vm.productQuantityLabel = WEBSITE_SETTINGS.SHOP.PRODUCT_QUANTITY_LABEL;
	}

})();