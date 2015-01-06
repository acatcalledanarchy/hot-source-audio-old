/* jshint latedef: false */

(function(){

	'use strict';

	angular
		.module('app')
		.controller('ShowreelCtrl', ShowreelCtrl);

	ShowreelCtrl.$inject = ['$sce'];

	function ShowreelCtrl($sce) {

		var vm = this;
		vm.introCopy = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.	Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	
		////////////////////////

		vm.videogular = {
			sources: [
				{src: $sce.trustAsResourceUrl('http://www.videogular.com/assets/videos/videogular.mp4'), type: 'video/mp4'},
				{src: $sce.trustAsResourceUrl('http://www.videogular.com/assets/videos/videogular.webm'), type: 'video/webm'},
				{src: $sce.trustAsResourceUrl('http://www.videogular.com/assets/videos/videogular.ogg'), type: 'video/ogg'}
			],/*
			tracks: [
				{
					src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
					kind: 'subtitles',
					srclang: 'en',
					label: 'English',
					default: ''
				}
			],*/
			theme: 'bower_components/videogular-themes-default/videogular.css',
			plugins: {
				poster: 'http://www.videogular.com/assets/images/videogular.png'
			}
		};
	}

})();