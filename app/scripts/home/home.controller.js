/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['WEBSITE_SETTINGS'];

	function HomeCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.autoScroll = true;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();