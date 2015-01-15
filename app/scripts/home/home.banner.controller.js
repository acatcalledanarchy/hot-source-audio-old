/* jshint latedef: false */

(function() {
	
	'use strict';

	angular
		.module('app')
		.controller('HomeBannerCtrl', HomeBannerCtrl);

	HomeBannerCtrl.$inject = ['WEBSITE_SETTINGS'];

	function HomeBannerCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.pageBanner = WEBSITE_SETTINGS.PAGES.HOME.BANNER;
	}

})();