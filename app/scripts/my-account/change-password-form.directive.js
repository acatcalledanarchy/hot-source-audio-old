/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.directive('changePasswordForm', changePasswordForm);

	function changePasswordForm() {

		var directive = {
			link: link,
			restrict: 'AE',
			scope: {
				user: '='
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
					scope.changePasswordProcessing = false;
				} else {
					scope.changePasswordProcessing = false;
				}
			};
		}
	}

})();