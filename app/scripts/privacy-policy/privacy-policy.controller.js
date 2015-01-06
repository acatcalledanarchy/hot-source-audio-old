/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('PrivacyPolicyCtrl', PrivacyPolicyCtrl);

	function PrivacyPolicyCtrl() {

		var vm = this;
		vm.pageBackgroundClass = 'page-background-privacy-policy';
	}

})();