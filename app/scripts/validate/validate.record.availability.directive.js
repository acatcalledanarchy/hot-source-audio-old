/*jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.validate')
		.directive('recordAvailabilityValidator', recordAvailabilityValidator);

	/* latedef: true */
	recordAvailabilityValidator.$inject = ['$http', 'Firebase', 'FIREBASE_URL'];

	function recordAvailabilityValidator($http, Firebase, FIREBASE_URL) {

		var directive = {
			/* latedef: true */
			link: link,
			require: 'ngModel'
		};

		return directive;

		/*---------------------------------------------*/

		function link(scope, element, attrs, ngModel) {
				
			var firebaseIndex = attrs.recordAvailabilityValidator;

			ngModel.$parsers.push(function(value) {
				setAsLoading(true);
				setAsAvailable(false);
				var ref  = new Firebase(FIREBASE_URL + '/profile');
				ref.on('value', function(snapshot) {
					setAsLoading(false);
					var profiles = snapshot.val(),
						available = true;
					for(var i in profiles) {
						var profile = profiles[i];
						for(var prop in profile) {
							var propValue = profile[prop];
							if (prop === firebaseIndex && value === propValue) {
								available = false;
								break;
							}
						}
						if(!available) {
							break;
						}
					}
					setAsAvailable(available);
				}, function() {
					setAsAvailable(false);
				});

				return value;
			});	

			function setAsLoading(bool) {
				ngModel.$setValidity('loading', !bool); 
			}

			function setAsAvailable(bool) {
				ngModel.$setValidity('available', bool); 
			}
		}
	}

})();