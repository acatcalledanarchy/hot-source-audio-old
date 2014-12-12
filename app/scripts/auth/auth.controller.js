/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.auth')
		.controller('AuthCtrl', AuthCtrl);

	AuthCtrl.$inject = ['user', '$location'];

	function AuthCtrl(user, $location) {

		if(user) {
			$location.path('/my-account');
		}

		var vm = this;
  		vm.pageContentClass	= 'page-content-auth';		
	}

})();