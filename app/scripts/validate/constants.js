/*jshint camelcase: false*/

(function() {
    
    'use strict';

 	var required_patterns = [
		/\d+/,    //numeric values
		/[a-z]+/, //lowercase values
		/[A-Z]+/, //uppercase values
		/\W+/,    //special characters
		/^\S+$/   //no whitespace allowed
	];

    angular
        .module('app.validate')
        .constant('REQUIRED_PATTERNS', required_patterns);
})();

