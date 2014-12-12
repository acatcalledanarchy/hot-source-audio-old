/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('ProductsCtrl', ProductsCtrl);

	ProductsCtrl.$inject = ['products', 'WEBSITE_SETTINGS'];

	function ProductsCtrl(products, WEBSITE_SETTINGS) {

		var vm = this;
		vm.products = products;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();