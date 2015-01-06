/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['user', 'Auth', 'slides', 'WEBSITE_SETTINGS'];

	function HomeCtrl(user, Auth, slides, WEBSITE_SETTINGS) {

		var vm = this;
		vm.pageCopy = '<p>Hot Source is an independent audio production company working with radio stations, digital media, television &amp; film production companies, and advertising agencies. Our services include radio script writing, radio production, bespoke music composition and sound design within audio branding strategies.</p><p>We have a passion to make your brand sound great whether it&#39;s at national, regional or local level. Our recording studios (some 20ft underground) are set in the former WWII German Naval Command Bunker during the occupation… so it&#39;s the perfect location. (We&#39;ve been here longer than the German occupying forces you know!)</p><p>In addition to creating audio campaigns for clients we also work with media creative to produce finished productions across traditional and digital media including copy for website and social media.</p>';
		vm.pageContentClass	= 'page-content-home';
		vm.slides = slides;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();