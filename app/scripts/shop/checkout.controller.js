/* jshint latedef: false */
/* jshint camelcase: false */

(function(){

	'use strict';

	angular
		.module('app.shop')
		.controller('CheckoutCtrl', CheckoutCtrl);

	CheckoutCtrl.$inject = ['user', 'ngCart', 'Auth', 'WEBSITE_SETTINGS'];

	function CheckoutCtrl(user, ngCart, Auth, WEBSITE_SETTINGS) {

		var vm = this;
		vm.ngCart = ngCart;
		vm.user = user;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;

		if(user) {
			vm.userProfile = {
				email: user.email,
				firstName: user.first_name,
				surname: user.surname,
				md5Hash: user.md5_hash
			};
		} else {
			vm.userProfile = {};
		}
	}

})();