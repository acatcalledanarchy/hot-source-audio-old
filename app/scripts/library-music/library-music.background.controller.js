/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('LibraryMusicBackgroundCtrl', LibraryMusicBackgroundCtrl);

	function LibraryMusicBackgroundCtrl() {

		var vm = this;
		vm.pageBackgroundClass = 'page-background-library-music';
	}

})();