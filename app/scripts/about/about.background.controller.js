/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('AboutBackgroundCtrl', AboutBackgroundCtrl);

	function AboutBackgroundCtrl() {

		var vm = this;
		vm.pageBackgroundClass = 'page-background-about';
	
	}

})();