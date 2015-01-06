/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('FooterCtrl', FooterCtrl);

	FooterCtrl.$inject = ['clients', 'WEBSITE_SETTINGS'];

	function FooterCtrl(clients, WEBSITE_SETTINGS) {
	
		var vm = this;
		vm.clients = clients;
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