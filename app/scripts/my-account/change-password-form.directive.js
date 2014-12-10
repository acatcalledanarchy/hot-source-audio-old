/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.directive('changePasswordForm', changePasswordForm);

	changePasswordForm.$inject = ['Auth'];

	function changePasswordForm(Auth) {

		var directive = {
			link: link,
			restrict: 'AE',
			scope: {
				emailAddress: '@'
			},
			templateUrl: 'scripts/my-account/change-password-form.html',
		};

		return directive;

		function link(scope) {
			scope.changePasswordProcessing = false;
			scope.changePassword = function() {
				scope.changePasswordProcessing = true;
				scope.$broadcast('show-errors-check-validity');
				if (scope.changePasswordForm.$valid) {
					Auth.changePassword(scope.emailAddress, scope.passwords.currentPassword, scope.passwords.newPassword).then(function(){
						scope.passwords = {};
						scope.changePasswordError = false;
						scope.changePasswordProcessing = false;
						scope.changePasswordSuccess = 'Successfully updated your password.';
						scope.$broadcast('show-errors-reset');
					}, function(error) {
						scope.changePasswordSuccess = false;
						scope.changePasswordProcessing = false;
						scope.changePasswordError = error.toString().replace('Error: FirebaseSimpleLogin: ', '');
					});
				} else {
					scope.changePasswordProcessing = false;
				}
			};
		}
	}

})();