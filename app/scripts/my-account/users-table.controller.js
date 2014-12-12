/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('UsersCtrl', UsersCtrl);

	UsersCtrl.$inject = ['$scope', 'Auth'];

	function UsersCtrl($scope, Auth) {

		var vm = this;
		vm.userId = Auth.user.uid;
		vm.users = Auth.all;
		vm.users.$loaded().then(function(users) {
			vm.users = users;
			vm.click = function(userId, isAdmin) {
				Auth.updateAdminStatus(userId, isAdmin);
			};
		});
	}

})();