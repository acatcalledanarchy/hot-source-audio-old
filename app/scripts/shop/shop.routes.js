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
		.state('app.' + shopTitleSlug, {
			url: '/' + shopTitleSlug,
			resolve: {
				user: function(Auth) {
					return Auth.resolveUser().then(function(user) {
						return user;
					});
				}
			},			
			views: {
				'header@': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},	
				'page-background@': {
					controller: 'ShopBackgroundCtrl',
					controllerAs: 'vm'
				},			
				'page-content@': {
					templateUrl: 'scripts/shop/shop.html',
					controller: 'ShopCtrl',
					controllerAs: 'vm'
				},			
				'footer@': {
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
		.state('app.' + shopTitleSlug + 'detail', {
			url: '/' + shopTitleSlug + '/:productId',
			resolve: {
				user: function(Auth) {
					return Auth.resolveUser().then(function(user) {
						return user;
					});
				}
			},					
			views: {
				'header@': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},
				'page-background@': {
					controller: 'ShopBackgroundCtrl',
					controllerAs: 'vm'
				},
				'page-content@': {
					templateUrl: 'scripts/product/product.html',
					controller: 'ProductCtrl',
					controllerAs: 'vm'
				},
				'footer@': {
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
		.state('app.checkout', {
			url: '/checkout',
			resolve: {
				user: function(Auth) {
					return Auth.resolveUser().then(function(user) {
						return user;
					});
				}
			},			
			views: {
				'header@': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},
				'page-background@': {
					controller: 'CheckoutBackgroundCtrl',
					controllerAs: 'vm'
				},
				'page-content@': {
					templateUrl: 'scripts/shop/checkout.html',
					controller: 'CheckoutCtrl',
					controllerAs: 'vm'
				},			
				'footer@': {
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
		.state('app.checkoutcomplete', {
			url: '/checkout/:userId',
			resolve: {
				user: function(Auth) {
					return Auth.resolveUser().then(function(user) {
						return user;
					});
				}
			},			
			views: {
				'header@': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},
				'page-background@': {
					controller: 'CheckoutBackgroundCtrl',
					controllerAs: 'vm'
				},
				'page-content@': {
					templateUrl: 'scripts/shop/payment-completed.html',
					controller: 'PaymentCompletedCtrl',
					controllerAs: 'vm'
				},			
				'footer@': {
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
		.state('app.payment-cancelled', {
			url: '/payment-cancelled',
			resolve: {
				user: function(Auth) {
					return Auth.resolveUser().then(function(user) {
						return user;
					});
				}
			},			
			views: {
				'header@': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},
				'page-background@': {
					controller: 'CheckoutBackgroundCtrl',
					controllerAs: 'vm'
				},
				'page-content@': {
					templateUrl: 'scripts/shop/payment-cancelled.html',
					controller: 'CheckoutCtrl',
					controllerAs: 'vm'
				},			
				'footer@': {
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