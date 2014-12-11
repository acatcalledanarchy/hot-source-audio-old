/*jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.shop')
		.controller('ShopCtrl', ShopCtrl);

	ShopCtrl.$inject = ['$scope', 'Auth', 'Product', 'ngCart', 'WEBSITE_SETTINGS'];

	function ShopCtrl($scope, Auth, Product, ngCart, WEBSITE_SETTINGS) {

		var vm = this;
		vm.buyNowLabel = WEBSITE_SETTINGS.SHOP.BUY_NOW_LABEL;
		vm.deleteProduct = deleteProduct;
		vm.deletingProduct = false;
		vm.fontAwesomeIcon = WEBSITE_SETTINGS.SHOP.FONT_AWESOME_ICON;
		vm.isAdmin = Auth.isAdmin;
		vm.pageTitle = WEBSITE_SETTINGS.TITLE + ' ' + WEBSITE_SETTINGS.SHOP.TITLE;
		vm.productType = WEBSITE_SETTINGS.SHOP.PRODUCT_TYPE;
		vm.productQuantityLabel = WEBSITE_SETTINGS.SHOP.PRODUCT_QUANTITY_LABEL;
		vm.products = Product.all;
		vm.shopTitle = WEBSITE_SETTINGS.SHOP.TITLE;
		vm.signedIn = Auth.signedIn;
		vm.user = Auth.user;

		function deleteProduct(product) {
			vm.deletingProduct = true;
			Product.delete(product).then(function() {
				vm.deletingProduct = false;
			});
		}
	}

})();