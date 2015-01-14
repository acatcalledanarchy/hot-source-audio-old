/* jshint latedef: false */

(function() {
	
	'use strict';

	angular	
		.module('app')
		.controller('StudioCtrl', StudioCtrl);

	StudioCtrl.$inject = ['WEBSITE_SETTINGS'];

	function StudioCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();