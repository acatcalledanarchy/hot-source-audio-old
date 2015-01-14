/* jshint latedef: false */

(function() {
	
	'use strict';

	angular
		.module('app')
		.controller('OurWorkBannerCtrl', OurWorkBannerCtrl);

	OurWorkBannerCtrl.$inject = ['WEBSITE_SETTINGS'];

	function OurWorkBannerCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.pageBanner = 'our-work.jpg';
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();