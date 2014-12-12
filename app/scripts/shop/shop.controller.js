/*jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.shop')
		.controller('ShopCtrl', ShopCtrl);

	ShopCtrl.$inject = ['$scope', 'Auth', 'Product', 'ngCart', 'WEBSITE_SETTINGS'];

	function ShopCtrl($scope, Auth, Product, ngCart, WEBSITE_SETTINGS) {

		var vm = this;
		vm.deleteProduct = deleteProduct;
		vm.deletingProduct = false;
		vm.isAdmin = Auth.isAdmin;
		vm.products = Product.all;
		vm.signedIn = Auth.signedIn;
		vm.user = Auth.user;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;

		function deleteProduct(product) {
			vm.deletingProduct = true;
			Product.delete(product).then(function() {
				vm.deletingProduct = false;
			});
		}
	}

})();