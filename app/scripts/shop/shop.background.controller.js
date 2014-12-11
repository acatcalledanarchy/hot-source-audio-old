/*jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('ShopBackgroundCtrl', ShopBackgroundCtrl);

	function ShopBackgroundCtrl() {

		var vm = this;
		vm.pageBackgroundClass = 'page-background-shop';
	}

})();