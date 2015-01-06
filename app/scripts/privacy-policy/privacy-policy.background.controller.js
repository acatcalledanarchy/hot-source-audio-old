/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('PrivacyPolicyBackgroundCtrl', PrivacyPolicyBackgroundCtrl);

	function PrivacyPolicyBackgroundCtrl() {

		var vm = this;
		vm.pageBackgroundClass = 'page-background-privacy-policy-and-cookies';
	}

})();