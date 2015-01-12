/*jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('ContactBackgroundCtrl', ContactBackgroundCtrl);

	function ContactBackgroundCtrl() {

		var vm = this;
		vm.pageBackgroundClass = 'page-background-contact-us';
	}

})();