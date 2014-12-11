/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('HomeBackgroundCtrl', HomeBackgroundCtrl);

	function HomeBackgroundCtrl() {

		var vm = this;
		vm.pageBackgroundClass = 'page-background-home';
	}

})();