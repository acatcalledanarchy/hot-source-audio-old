/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['user', 'Auth', 'WEBSITE_SETTINGS'];

	function HomeCtrl(user, Auth, WEBSITE_SETTINGS) {

		var vm = this;
		vm.pageContentClass	= 'page-content-home';
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();