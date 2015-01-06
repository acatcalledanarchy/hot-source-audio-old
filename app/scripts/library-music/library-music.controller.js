/* jshint latedef: false */

(function(){

	'use strict';

	angular
		.module('app')
		.controller('LibraryMusicCtrl', LibraryMusicCtrl);

	function LibraryMusicCtrl() {

		var vm = this;
		vm.test = 'Test';
	}

})();