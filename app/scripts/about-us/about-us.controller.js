/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('AboutCtrl', AboutCtrl);

	AboutCtrl.$inject = ['user', 'WEBSITE_SETTINGS'];

	function AboutCtrl(user, WEBSITE_SETTINGS) {

  		var vm = this;
  		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
		vm.pageContentClass	= 'page-content-about';
		vm.user = user;
	}

})();