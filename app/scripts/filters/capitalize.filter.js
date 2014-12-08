/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.filters')
		.filter('capitalize', capitalize);

	function capitalize() {
		return function(input) {

			if (input !== null) {
				input = input.toLowerCase();
				return input.substring(0, 1).toUpperCase() + input.substring(1);
	  		}
  		};
	}

})();