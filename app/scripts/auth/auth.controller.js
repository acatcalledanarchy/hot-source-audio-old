/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.auth')
		.controller('AuthCtrl', AuthCtrl);

	AuthCtrl.$inject = ['user'];

	function AuthCtrl(user) {

		var vm = this;
  		vm.pageContentClass	= 'page-content-auth';
  		vm.user = user;	
	}

})();