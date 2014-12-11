/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('AboutCtrl', AboutCtrl);

	AboutCtrl.$inject = ['WEBSITE_SETTINGS'];

	function AboutCtrl(WEBSITE_SETTINGS) {

  		var vm = this;
  		vm.address = WEBSITE_SETTINGS.ADDRESS;
		vm.latitude = WEBSITE_SETTINGS.GOOGLE.MAP.LATITUDE;
  		vm.longitude = WEBSITE_SETTINGS.GOOGLE.MAP.LONGITUDE;
		vm.googleMapMarkerIcon = WEBSITE_SETTINGS.GOOGLE.MAP.MARKER_ICON;
		vm.pageContentClass	= 'page-content-about';
		vm.websiteTitle = WEBSITE_SETTINGS.TITLE;
	}

})();