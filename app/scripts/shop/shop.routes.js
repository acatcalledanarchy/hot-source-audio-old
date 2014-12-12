/*jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.shop')
		.config(config);

	config.$inject = ['$stateProvider', 'WEBSITE_SETTINGS'];

	function config($stateProvider, WEBSITE_SETTINGS) {

		var websiteTitle = ' | ' + WEBSITE_SETTINGS.TITLE;
		var shopTitle = WEBSITE_SETTINGS.SHOP.TITLE;
		var shopTitleSlug = shopTitle.toLowerCase();

		$stateProvider
		.state(shopTitleSlug, {
			url: '/' + shopTitleSlug,
			resolve: {
				user: function(Auth) {
					return Auth.resolveUser();
				}
			},
			views: {
				'header': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},	
				'page-background': {
					controller: 'ShopBackgroundCtrl',
					controllerAs: 'vm'
				},			
				'page-content': {
					templateUrl: 'scripts/shop/shop.html',
					controller: 'ShopCtrl',
					controllerAs: 'vm'
				},			
				'footer': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				pageTitle: shopTitle + websiteTitle,
				pageBodyClass: 'shop'
			}
		})
		.state(shopTitleSlug + 'detail', {
			url: '/' + shopTitleSlug + '/:productId',
			resolve: {
				user: function(Auth) {
					return Auth.resolveUser();
				}
			},			
			views: {
				'header': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},
				'page-background': {
					controller: 'ShopBackgroundCtrl',
					controllerAs: 'vm'
				},
				'page-content': {
					templateUrl: 'scripts/product/product.html',
					controller: 'ProductCtrl',
					controllerAs: 'vm'
				},
				'footer': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				pageTitle: shopTitle + websiteTitle,
				pageBodyClass: 'shop'
			}
		})
		.state('checkout', {
			url: '/checkout',
			resolve: {
				user: function(Auth) {
					return Auth.resolveUser();
				}
			},
			views: {
				'header': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},
				'page-background': {
					controller: 'CheckoutBackgroundCtrl',
					controllerAs: 'vm'
				},
				'page-content': {
					templateUrl: 'scripts/shop/checkout.html',
					controller: 'CheckoutCtrl',
					controllerAs: 'vm'
				},			
				'footer': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				pageTitle: 'Checkout' + websiteTitle,
				pageBodyClass: 'checkout'
			}
		})
		.state('checkoutcomplete', {
			resolve: {
				user: function(Auth) {
					return Auth.resolveUser();
				}
			},
			url: '/checkout/:userId',
			views: {
				'header': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},
				'page-background': {
					controller: 'CheckoutBackgroundCtrl',
					controllerAs: 'vm'
				},
				'page-content': {
					templateUrl: 'scripts/shop/payment-completed.html',
					controller: 'PaymentCompletedCtrl',
					controllerAs: 'vm'
				},			
				'footer': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				pageTitle: 'Checkout' + websiteTitle,
				pageBodyClass: 'checkout'
			}
		})
		.state('payment-cancelled', {
			url: '/payment-cancelled',
			views: {
				'header': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},
				'page-background': {
					controller: 'CheckoutBackgroundCtrl',
					controllerAs: 'vm'
				},
				'page-content': {
					templateUrl: 'scripts/shop/payment-cancelled.html',
					controller: 'CheckoutCtrl',
					controllerAs: 'vm'
				},			
				'footer': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				pageTitle: 'Payment cancelled' + websiteTitle,
				pageBodyClass: 'checkout'
			}
		});
	}

})();