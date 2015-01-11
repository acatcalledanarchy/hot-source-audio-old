/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('AboutCtrl', AboutCtrl);

	AboutCtrl.$inject = ['WEBSITE_SETTINGS'];

	function AboutCtrl(WEBSITE_SETTINGS) {

  		var vm = this;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
		vm.pageContentClass	= 'page-content-about';
	}

})();