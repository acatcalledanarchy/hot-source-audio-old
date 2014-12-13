/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('ProfileCtrl', ProfileCtrl);

	ProfileCtrl.$inject = ['user'];

	function ProfileCtrl(user) {

		var vm = this;
		vm.profile = {};
		vm.user = user;
	}

})();