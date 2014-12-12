/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['Auth', 'WEBSITE_SETTINGS'];

	function HomeCtrl(Auth, WEBSITE_SETTINGS) {

		var vm = this;
		vm.pageContentClass	= 'page-content-home';
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();