/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('HeaderCtrl', HeaderCtrl);

	HeaderCtrl.$inject = ['Auth', 'WEBSITE_SETTINGS'];

	function HeaderCtrl(Auth, WEBSITE_SETTINGS) {

		var vm = this;
		vm.signedIn = Auth.signedIn;
		vm.logout = Auth.logout;
		vm.user = Auth.user;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();