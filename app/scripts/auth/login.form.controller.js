/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.auth')
		.controller('LoginFormCtrl', LoginFormCtrl);

	LoginFormCtrl.$inject = ['$scope', '$location', 'Auth'];

	function LoginFormCtrl($scope, $location, Auth) {

		var vm = this;
		vm.oAuthLogin = oAuthLogin;
		vm.oAuthLoginProcessing = false;
		vm.login = login;
		vm.loginProcessing = false;
		
		function login() {
			vm.loginProcessing = true;
			$scope.$broadcast('show-errors-check-validity');
			if ($scope.loginForm.$valid) {
				Auth.login(vm.user).then(function () {
					$location.path('/home');
				}, function(error) {
					vm.loginProcessing = false;
					vm.loginError = error.toString();
					vm.loginError = vm.loginError.replace('Error: FirebaseSimpleLogin:', '');
				});
			} else {
				vm.loginProcessing = false;
			}
		}

	
		function oAuthLogin(provider) {
			vm.oAuthLoginProcessing = true;
			Auth.oAuthLogin(provider).then( function() {
				$location.path('/home');
			}, function (error) {
				vm.oAuthLoginProcessing = false;
				vm.authError = Auth.parseErrorMessage(error);
			});
		}
	}

})();