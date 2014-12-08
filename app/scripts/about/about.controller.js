/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('AboutCtrl', AboutCtrl);

	AboutCtrl.$inject = ['$scope', '$log', 'WEBSITE_SETTINGS'];

	function AboutCtrl($scope, $log, WEBSITE_SETTINGS) {

  		var vm = this;
		vm.pageContentClass	= 'page-content-about';
		vm.websiteTitle = WEBSITE_SETTINGS.TITLE;

		$scope.map = {
			events: {
				tilesloaded: function (map) {
					$scope.$apply(function () {
						$log.info('this is the map instance', map);
					});
				}
			}
		};
	}

})();