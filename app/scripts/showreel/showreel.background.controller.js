/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('ShowreelBackgroundCtrl', ShowreelBackgroundCtrl);

	function ShowreelBackgroundCtrl() {

		var vm = this;
		vm.pageBackgroundClass = 'page-background-showreel';
	}

})();