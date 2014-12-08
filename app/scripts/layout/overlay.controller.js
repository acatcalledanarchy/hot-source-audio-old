/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('OverlayCtrl', OverlayCtrl);

	OverlayCtrl.$inject = ['WEBSITE_SETTINGS'];

	function OverlayCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.websiteTitle = WEBSITE_SETTINGS.TITLE;
	}

})();