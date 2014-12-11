/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('ErrorBackgroundCtrl', ErrorBackgroundCtrl);

	function ErrorBackgroundCtrl() {

		var vm = this;
		vm.pageBackgroundClass = 'page-background-error';
	}

})();