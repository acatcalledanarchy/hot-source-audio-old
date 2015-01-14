/* jshint latedef: false */

(function() {
	
	'use strict';

	angular
		.module('app')
		.controller('ContactUsBannerCtrl', ContactUsBannerCtrl);

	ContactUsBannerCtrl.$inject = ['WEBSITE_SETTINGS'];

	function ContactUsBannerCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.pageBanner = 'contact-us.jpg';
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();