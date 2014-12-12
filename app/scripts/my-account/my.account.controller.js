/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('MyAccountCtrl', MyAccountCtrl);

	MyAccountCtrl.$inject = ['user', '$location', 'Auth', 'WEBSITE_SETTINGS'];

	function MyAccountCtrl(user, $location, Auth, WEBSITE_SETTINGS) {

		if (!user) {
			$location.path('/404');
		}
		
		var vm = this;
		vm.isAdmin = Auth.isAdmin;
		vm.pageContentClass	= 'page-content-auth';
		vm.signedIn = Auth.signedIn;
		vm.user = user;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();