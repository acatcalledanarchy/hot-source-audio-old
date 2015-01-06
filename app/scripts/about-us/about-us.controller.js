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
  		vm.introCopy = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
		vm.pageContentClass	= 'page-content-about';
		vm.user = user;

		console.log(employees);
	}

})();