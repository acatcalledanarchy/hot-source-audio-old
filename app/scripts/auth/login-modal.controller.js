/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.auth')
		.controller('LoginModalCtrl', LoginModalCtrl);

	LoginModalCtrl.$inject = ['$scope', '$modalInstance'];

	function LoginModalCtrl($scope, $modalInstance) {

		$scope.cancel = cancel;
		$scope.login = login;
		
		//////////////////////////////////////////////

		function cancel() {
			$modalInstance.dismiss('cancel');
		}

		function login() {
			$modalInstance.close();
		}		
	}

})();