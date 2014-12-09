/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('CalendarCtrl', CalendarCtrl);

	function CalendarCtrl() {

		var vm = this;
		vm.eventSources = [];
	}

})();