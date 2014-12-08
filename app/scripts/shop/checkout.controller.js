/* jshint latedef: false */
/* jshint camelcase: false */

(function(){

	'use strict';

	angular
		.module('app.shop')
		.controller('CheckoutCtrl', CheckoutCtrl);

	function CheckoutCtrl(ngCart, Auth, user, WEBSITE_SETTINGS) {

		var vm = this;
		vm.baseUrl = WEBSITE_SETTINGS.BASE_URL;
		vm.fontAwesomeIcon = WEBSITE_SETTINGS.SHOP.FONT_AWESOME_ICON;
		vm.ngCart = ngCart;
		vm.payPalEmailAddress = WEBSITE_SETTINGS.SHOP.PAY_PAL_EMAIL_ADDRESS;
		vm.shopTitle = WEBSITE_SETTINGS.SHOP.TITLE;
		vm.signedIn = Auth.signedIn;
		vm.userMd5Hash = user ? user.md5_hash : false;
		vm.websiteLogo = WEBSITE_SETTINGS.LOGO;
	}

})();