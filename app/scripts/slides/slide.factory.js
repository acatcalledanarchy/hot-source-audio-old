/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.factory('Slide', Slide);

	function Slide() {

		var slides = ['banner-1', 'banner-2', 'banner-3', 'banner-4', 'banner-5'];

		var factory = {
			all: slides
		};

		return factory;
	}

})();
