/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['WEBSITE_SETTINGS'];

	function HomeCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.pageContentClass	= 'page-content-home';
		vm.websiteTitle = WEBSITE_SETTINGS.TITLE;
	}

})();