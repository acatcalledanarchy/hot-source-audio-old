/*jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('ContactCtrl', ContactCtrl);

	ContactCtrl.$inject = ['user', 'WEBSITE_SETTINGS'];

	function ContactCtrl(user, WEBSITE_SETTINGS) {

		var vm = this;
		vm.pageContentClass	= 'page-content-contact';
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
		vm.user = user;
	}
})();