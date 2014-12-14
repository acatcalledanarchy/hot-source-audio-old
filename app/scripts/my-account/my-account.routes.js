/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.config(config);

	config.$inject = ['$stateProvider', 'WEBSITE_SETTINGS'];

	function config($stateProvider, WEBSITE_SETTINGS) {

		var websiteTitle = ' | ' + WEBSITE_SETTINGS.TITLE;

		$stateProvider
		.state('app.my-account', {
			url: '/my-account',
			resolve: {
				Auth: 'Auth',
				user: function(Auth) {
					return Auth.resolveUser().then(function(user) {
						return user;
					});
				},
				Product: 'Product',
				products: function(Product) {
					return Product.all;
				},
				users: function(Auth) {
					return Auth.all;
				}
			},
			views: {
				'header@': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},
				'page-background@': {
					controller: 'AuthBackgroundCtrl',
					controllerAs: 'vm'
				},
				'page-content@': {
					templateUrl: 'scripts/my-account/my-account.html',
					controller: 'MyAccountCtrl',
					controllerAs: 'vm'
				},
				'profile@app.my-account': {
					templateUrl: 'scripts/my-account/profile.html',
					controller: 'ProfileCtrl',
					controllerAs: 'vm'
				},
				'orders@app.my-account': {
					templateUrl: 'scripts/my-account/orders-table.html',
					controller: 'OrdersCtrl',
					controllerAs: 'vm',
					resolve: {
						Order: 'Order',
						orders: function(Order) {
							return Order.all;
						}
					}
				},
				'products@app.my-account': {
					templateUrl: 'scripts/my-account/products-table.html',
					controller: 'ProductsCtrl',
					controllerAs: 'vm'
				},
				'users@app.my-account': {
					templateUrl: 'scripts/my-account/users-table.html',
					controller: 'UsersCtrl',
					controllerAs: 'vm'
				},
				'calendar@app.my-account': {
					templateUrl: 'scripts/my-account/calendar.html',
					controller: 'CalendarCtrl',
					controllerAs: 'vm'
				},
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				pageTitle: 'My account' + websiteTitle,
				pageBodyClass: 'auth'
			}
		});
	}
})();