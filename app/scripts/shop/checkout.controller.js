/* jshint latedef: false */
/* jshint camelcase: false */

(function(){

	'use strict';

	angular
		.module('app.shop')
		.controller('CheckoutCtrl', CheckoutCtrl);

	function CheckoutCtrl(ngCart, Auth, user, WEBSITE_SETTINGS) {

		var vm = this;
		vm.ngCart = ngCart;
		vm.signedIn = Auth.signedIn;
		vm.userProfile = {};
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;

		Auth.get(Auth.user.uid).$loaded().then(function(user) {
			console.log(user);
			vm.userProfile = {
				email: user.email,
				firstName: user.first_name,
				surname: user.surname,
				md5Hash: user.md5_hash
			};
		});
	}

})();