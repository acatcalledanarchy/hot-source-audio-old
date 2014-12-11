/*jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.validate')
		.directive('passwordCharactersValidator', passwordCharactersValidator);

	passwordCharactersValidator.$inject = ['REQUIRED_PATTERNS'];

	function passwordCharactersValidator(REQUIRED_PATTERNS) {

		var directive = {
			link: link,
			require: 'ngModel'
		};

		return directive;

		/*---------------------------------------------*/

		function link($scope, element, attrs, ngModel) {
				
			ngModel.$validators.passwordcharacters = function(value) {

				var status = true;
				
				angular.forEach(REQUIRED_PATTERNS, function(pattern) {
					status = status && pattern.test(value);
				});
				
				return status;
			}; 
		}
	}

})();