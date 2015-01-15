/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('FooterCtrl', FooterCtrl);

	FooterCtrl.$inject = ['$location', 'WEBSITE_SETTINGS'];

	function FooterCtrl($location, WEBSITE_SETTINGS) {
	
		var vm = this;
		vm.copyrightYear = getCopyrightYear();
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;

		//////////////////////////////
		
		function getCopyrightYear() {
			var d = new Date(),
				year = d.getFullYear();

			return year;
		}
	}

})();