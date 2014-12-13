/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('MyAccountCtrl', MyAccountCtrl);

	MyAccountCtrl.$inject = ['user', '$location', 'Auth', 'WEBSITE_SETTINGS'];

	function MyAccountCtrl(user, $location, Auth, WEBSITE_SETTINGS) {

		if (!user) {
			$location.path('/404');
		} else {
			var vm = this;
			vm.pageContentClass	= 'page-content-auth';
			vm.user = user;
			vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
		}
	}

})();