/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.auth')
		.controller('RegisterFormCtrl', RegisterFormCtrl);

	RegisterFormCtrl.$inject = ['$scope', '$location', 'Auth'];

	function RegisterFormCtrl($scope, $location, Auth) {

		var vm = this;
		vm.registerProcessing = false;
		vm.register = register;

		function register() {
			vm.registerProcessing = true;
			$scope.$broadcast('show-errors-check-validity');
			if ($scope.registerForm.$valid) {
				Auth.register(vm.user).then(function(user) {
					return Auth.login(vm.user).then(function() {
					 	user.username = vm.user.username;
					 	user.firstName = vm.user.firstName;
					 	user.surname = vm.user.surname;
						return Auth.createProfile(user);
					}).then(function() {
						$location.path('/home');
					});
				}, function (error) {
					vm.registerProcessing = false;
					vm.registerError = error.toString();
				});
			} else {
				vm.registerProcessing = false;
			}
		}	
	}

})();