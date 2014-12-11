/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('FooterCtrl', FooterCtrl);

	FooterCtrl.$inject = ['WEBSITE_SETTINGS'];

	function FooterCtrl(WEBSITE_SETTINGS) {
	
		var vm = this;
		vm.websiteTitle = WEBSITE_SETTINGS.TITLE;
		vm.copyrightYear = getCopyrightYear();

		function getCopyrightYear() {
			var d = new Date(),
				year = d.getFullYear();

			return year;
		}
	}

})();