/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('FooterCtrl', FooterCtrl);

	FooterCtrl.$inject = ['WEBSITE_SETTINGS'];

	function FooterCtrl(WEBSITE_SETTINGS) {
	
		var vm = this;
		vm.copyrightYear = getCopyrightYear();
		vm.scrollToTop = scrollToTop();
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;

		//////////////////////////////
		
		function getCopyrightYear() {
			var d = new Date(),
				year = d.getFullYear();

			return year;
		}

		function scrollToTop() {
			//$document.scrollTopAnimated(500, 5000);
		}
	}

})();