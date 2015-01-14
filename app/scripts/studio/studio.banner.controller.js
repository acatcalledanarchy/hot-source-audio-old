/* jshint latedef: false */

(function() {
	
	'use strict';

	angular
		.module('app')
		.controller('StudioBannerCtrl', StudioBannerCtrl);

	StudioBannerCtrl.$inject = ['WEBSITE_SETTINGS'];

	function StudioBannerCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.pageBanner = 'studio.jpg';
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();