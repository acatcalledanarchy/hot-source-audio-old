/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('AboutCtrl', AboutCtrl);

	AboutCtrl.$inject = ['$log', 'WEBSITE_SETTINGS'];

	function AboutCtrl($log, WEBSITE_SETTINGS) {

  		var vm = this;
  		vm.address = WEBSITE_SETTINGS.ADDRESS;
		vm.latitude = WEBSITE_SETTINGS.GOOGLEMAP.LATITUDE;
  		vm.longitude = WEBSITE_SETTINGS.GOOGLEMAP.LONGITUDE;
		vm.googleMapMarkerIcon = WEBSITE_SETTINGS.GOOGLEMAP.MARKER_ICON;
		vm.pageContentClass	= 'page-content-about';
		vm.websiteTitle = WEBSITE_SETTINGS.TITLE;

		vm.map = {
			events: {
				tilesloaded: function(map) {
					vm.$apply(function () {
						$log.info('this is the map instance', map);
					});
				}
			}
		};

		vm.eventSources = [];
	}

})();