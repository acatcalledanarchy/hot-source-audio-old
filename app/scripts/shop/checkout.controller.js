/* jshint latedef: false */
/* jshint camelcase: false */
/* global _ */

(function(){

	'use strict';

	angular
		.module('app.shop')
		.controller('CheckoutCtrl', CheckoutCtrl);

	CheckoutCtrl.$inject = ['ngCart', 'Auth', 'WEBSITE_SETTINGS'];

	function CheckoutCtrl(ngCart, Auth, WEBSITE_SETTINGS) {

		var vm = this;
		vm.ngCart = ngCart;
		vm.signedIn = Auth.signedIn;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;

		if(!_.isEmpty(Auth.user)) {
			Auth.user.profile.$loaded().then(function(profile) {
				vm.userProfile = {
					email: profile.email,
					firstName: profile.first_name,
					surname: profile.surname,
					md5Hash: profile.md5_hash
				};
			});
		} else {
			vm.userProfile = {};
		}
	}

})();