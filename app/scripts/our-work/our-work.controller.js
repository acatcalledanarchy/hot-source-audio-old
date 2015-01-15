/* jshint latedef: false */

(function(){

	'use strict';

	angular
		.module('app')
		.controller('OurWorkCtrl', OurWorkCtrl);

	OurWorkCtrl.$inject = ['$sce', '$stateParams', '$location', 'WEBSITE_SETTINGS'];

	function OurWorkCtrl($sce, $stateParams, $location, WEBSITE_SETTINGS) {

		if($stateParams.pageAnchor) {
			var pageAnchor = $stateParams.pageAnchor;
			$location.hash(pageAnchor);
		}

		var i,
			j,
			vm = this;
		vm.trustAsResourceUrl = trustAsResourceUrl;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
		
		activate();

		///////////////////////////////////////////

		function activate() {
			return trustAsResourceUrl();
		}

		function trustAsResourceUrl() {
			for(i in WEBSITE_SETTINGS.SHOWREEL.VIDEOS) {
				for(j in WEBSITE_SETTINGS.SHOWREEL.VIDEOS[i].FILES) {
					vm.WEBSITE_SETTINGS.SHOWREEL.VIDEOS[i].FILES[j].src = $sce.trustAsResourceUrl(WEBSITE_SETTINGS.SHOWREEL.VIDEOS[i].FILES[j].SRC);
					vm.WEBSITE_SETTINGS.SHOWREEL.VIDEOS[i].FILES[j].type = WEBSITE_SETTINGS.SHOWREEL.VIDEOS[i].FILES[j].TYPE;
				}
			}
			for(i in WEBSITE_SETTINGS.SHOWREEL.MP3S) {
				for(j in WEBSITE_SETTINGS.SHOWREEL.MP3S[i].FILES) {
					vm.WEBSITE_SETTINGS.SHOWREEL.MP3S[i].FILES[j].src = $sce.trustAsResourceUrl(WEBSITE_SETTINGS.SHOWREEL.MP3S[i].FILES[j].SRC);
					vm.WEBSITE_SETTINGS.SHOWREEL.MP3S[i].FILES[j].type = WEBSITE_SETTINGS.SHOWREEL.MP3S[i].FILES[j].TYPE;
				}
			}
		}
	}

})();