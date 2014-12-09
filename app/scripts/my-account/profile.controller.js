/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('ProfileCtrl', ProfileCtrl);

	ProfileCtrl.$inject = ['Auth'];

	function ProfileCtrl(Auth) {

		var vm = this;
		vm.user = Auth.user;
	}

})();