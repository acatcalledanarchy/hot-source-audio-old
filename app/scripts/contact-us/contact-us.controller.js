/*jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('ContactUsCtrl', ContactUsCtrl);

	ContactUsCtrl.$inject = ['WEBSITE_SETTINGS'];

	function ContactUsCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.autoScroll = true;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}
})();