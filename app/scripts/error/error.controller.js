/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('ErrorCtrl', ErrorCtrl);

	function ErrorCtrl() {

		var vm = this;
		vm.pageContentClass	= 'page-content-error';
	}

})();