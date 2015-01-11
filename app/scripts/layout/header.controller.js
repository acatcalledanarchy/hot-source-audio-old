/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('HeaderCtrl', HeaderCtrl);

	HeaderCtrl.$inject = ['WEBSITE_SETTINGS'];

	function HeaderCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();