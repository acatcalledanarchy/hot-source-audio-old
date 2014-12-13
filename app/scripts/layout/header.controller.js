/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('HeaderCtrl', HeaderCtrl);

	HeaderCtrl.$inject = ['$scope', 'user', 'Auth', 'WEBSITE_SETTINGS'];

	function HeaderCtrl($scope, user, Auth, WEBSITE_SETTINGS) {

		var vm = this;
		vm.logout = Auth.logout;
		vm.user = user;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();