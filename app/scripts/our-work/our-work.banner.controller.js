/* jshint latedef: false */

(function() {
	
	'use strict';

	angular
		.module('app')
		.controller('OurWorkBannerCtrl', OurWorkBannerCtrl);

	OurWorkBannerCtrl.$inject = ['WEBSITE_SETTINGS'];

	function OurWorkBannerCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.pageBanner = WEBSITE_SETTINGS.PAGES.OUR_WORK.BANNER;
	}

})();