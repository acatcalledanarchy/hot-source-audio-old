/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('UsersCtrl', UsersCtrl);

	UsersCtrl.$inject = ['users', '$scope', 'Auth'];

	function UsersCtrl(users, $scope, Auth) {

		var vm = this;
		vm.userId = Auth.user.uid;
		vm.users = users;
		vm.updateAdminStatus = function(userId, isAdmin) {
			Auth.updateAdminStatus(userId, isAdmin);
		};
	}

})();