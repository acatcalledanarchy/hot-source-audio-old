/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('AboutUsCtrl', AboutUsCtrl);

	AboutUsCtrl.$inject = ['WEBSITE_SETTINGS'];

	function AboutUsCtrl(WEBSITE_SETTINGS) {

  		var vm = this;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
		vm.pageContentClass	= 'page-content-about-us';
	}

})();