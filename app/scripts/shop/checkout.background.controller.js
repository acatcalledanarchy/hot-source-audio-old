/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('CheckoutBackgroundCtrl', CheckoutBackgroundCtrl);

	function CheckoutBackgroundCtrl() {

		var vm = this;
		vm.pageBackgroundClass = 'page-background-checkout';
	}

})();