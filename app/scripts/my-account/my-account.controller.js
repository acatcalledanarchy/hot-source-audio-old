/* jshint latedef: false */
/* jshint camelcase: false */
/* global _ */

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
			vm.signedIn = Auth.signedIn;
			vm.user = user;
			vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;

			if(_.isEmpty(Auth.user)) {
				vm.isAdmin = false;
			} else{
				Auth.user.profile.$loaded().then(function(profile) {
					vm.isAdmin = profile.is_admin;
				});
			}
		}
	}

})();