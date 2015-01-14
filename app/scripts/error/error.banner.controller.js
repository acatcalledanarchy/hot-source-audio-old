/* jshint latedef: false */

(function() {
	
	'use strict';

	angular
		.module('app')
		.controller('ErrorBannerCtrl', ErrorBannerCtrl);

	ErrorBannerCtrl.$inject = ['WEBSITE_SETTINGS'];

	function ErrorBannerCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.pageBanner = 'error.jpg';
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();