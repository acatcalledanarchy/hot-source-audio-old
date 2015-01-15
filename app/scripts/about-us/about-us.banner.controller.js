/* jshint latedef: false */

(function() {
	
	'use strict';

	angular
		.module('app')
		.controller('AboutUsBannerCtrl', AboutUsBannerCtrl);

	AboutUsBannerCtrl.$inject = ['WEBSITE_SETTINGS'];

	function AboutUsBannerCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.pageBanner = WEBSITE_SETTINGS.PAGES.ABOUT_US.BANNER;
	}

})();