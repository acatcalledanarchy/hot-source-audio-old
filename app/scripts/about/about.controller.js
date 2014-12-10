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
		vm.latitude = WEBSITE_SETTINGS.GOOGLEMAP.LATITUDE;
  		vm.longitude = WEBSITE_SETTINGS.GOOGLEMAP.LONGITUDE;
		vm.googleMapMarkerIcon = WEBSITE_SETTINGS.GOOGLEMAP.MARKER_ICON;
		vm.pageContentClass	= 'page-content-about';
		vm.websiteTitle = WEBSITE_SETTINGS.TITLE;
	}

})();