/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('ErrorCtrl', ErrorCtrl);

	ErrorCtrl.$inject = ['user'];

	function ErrorCtrl(user) {

		var vm = this;
		vm.pageContentClass	= 'page-content-error';
		vm.user = user;
	}

})();