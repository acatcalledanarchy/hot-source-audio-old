/* jshint latedef: false */

(function(){

	'use strict';

	angular
		.module('app')
		.controller('ShowreelCtrl', ShowreelCtrl);

	ShowreelCtrl.$inject = ['WEBSITE_SETTINGS'];

	function ShowreelCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();