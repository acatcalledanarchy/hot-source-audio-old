/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('UsersCtrl', UsersCtrl);

	UsersCtrl.$inject = ['Auth'];

	function UsersCtrl(Auth) {

		var vm = this;
		vm.users = Auth.all;
		vm.users.$loaded().then(function(users){
			vm.users = users;
		});
	}

})();