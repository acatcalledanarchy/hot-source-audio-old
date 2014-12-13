/*jshint latedef: false */
/*jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.validate')
		.directive( 'dontMatchValidator', dontMatchValidator);

	function dontMatchValidator() {

		var directive =  {
			link: link,
			require: 'ngModel'
		};

		return directive;

		function link(scope, element, attrs, ngModel) {
			ngModel.$parsers.push(function(value) {
				ngModel.$setValidity('dontMatch', value !== scope.$eval(attrs.dontMatchValidator));
				return value;
			});
		}
	}

})();