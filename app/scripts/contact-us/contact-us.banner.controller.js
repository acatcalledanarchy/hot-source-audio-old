/* jshint latedef: false */

(function() {
	
	'use strict';

	angular
		.module('app')
		.controller('ContactUsBannerCtrl', ContactUsBannerCtrl);

	ContactUsBannerCtrl.$inject = ['WEBSITE_SETTINGS'];

	function ContactUsBannerCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.pageBanner = WEBSITE_SETTINGS.PAGES.CONTACT_US.BANNER;
	}

})();