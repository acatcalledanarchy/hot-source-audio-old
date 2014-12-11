/*jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.validate')
		.directive( 'matchValidator', matchValidator);

	function matchValidator() {

		var directive =  {
			link: link,
			require: 'ngModel'
		};

		return directive;

		/*---------------------------------------------*/

		function link(scope, element, attrs, ngModel) {
				
			ngModel.$parsers.push(function(value) {
				//var matches = value === scope.$eval(attrs.matchValidator);
				ngModel.$setValidity('match', value === scope.$eval(attrs.matchValidator));
				return value;
			});
		}
	}

})();