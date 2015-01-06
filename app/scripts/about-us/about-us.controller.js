/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('AboutCtrl', AboutCtrl);

	AboutCtrl.$inject = ['user', 'employees', 'WEBSITE_SETTINGS'];

	function AboutCtrl(user, employees, WEBSITE_SETTINGS) {

  		var vm = this;
  		vm.employees = employees;
  		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
		vm.pageContentClass	= 'page-content-about';
		vm.user = user;

		console.log(employees);
	}

})();