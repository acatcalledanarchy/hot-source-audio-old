/*jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.validate')
		.config(config);

	config.$inject = ['showErrorsConfigProvider'];

	function config(showErrorsConfigProvider) {
		showErrorsConfigProvider.trigger('keypress');
	}

})();