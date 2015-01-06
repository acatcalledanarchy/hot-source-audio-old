/* jshint latedef: false */

(function(){

	'use strict';

	angular
		.module('app')
		.controller('ShowreelCtrl', ShowreelCtrl);

	function ShowreelCtrl() {

		var vm = this;
		vm.test = 'Test';
	}

})();