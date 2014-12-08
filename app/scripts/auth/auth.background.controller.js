/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('AuthBackgroundCtrl', AuthBackgroundCtrl);

	function AuthBackgroundCtrl() {

		var vm = this;
		vm.pageBackgroundClass = 'page-background-auth';
	}

})();