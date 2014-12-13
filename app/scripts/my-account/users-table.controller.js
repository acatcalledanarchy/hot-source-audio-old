/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('UsersCtrl', UsersCtrl);

	UsersCtrl.$inject = ['user', 'users', '$scope', 'Auth'];

	function UsersCtrl(user, users, $scope, Auth) {

		var vm = this;
		vm.user = user;
		vm.users = users;
		vm.updateAdminStatus = function(userId, isAdmin) {
			Auth.updateAdminStatus(userId, isAdmin);
		};
	}

})();