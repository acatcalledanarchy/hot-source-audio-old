/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('ErrorCtrl', ErrorCtrl);

	ErrorCtrl.$inject = ['WEBSITE_SETTINGS'];

	function ErrorCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.autoScroll = true;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();