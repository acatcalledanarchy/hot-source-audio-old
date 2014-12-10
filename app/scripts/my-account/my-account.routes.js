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
		.state('my-account', {
			url: '/my-account',
			views: {
				'header': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},
				'page-background': {
					controller: 'AuthBackgroundCtrl',
					controllerAs: 'vm'
				},
				'page-content': {
					templateUrl: 'scripts/my-account/my-account.html',
					controller: 'MyAccountCtrl',
					controllerAs: 'vm',
					resolve: {
						user: function(Auth) {
							return Auth.resolveUser();
						}
					}
				},
				'profile@my-account': {
					templateUrl: 'scripts/my-account/profile.html',
					controller: 'ProfileCtrl',
					controllerAs: 'vm',
					resolve: {
						user: function(Auth) {
							return Auth.resolveUser();
						}
					}
				},
				'orders@my-account': {
					templateUrl: 'scripts/my-account/orders-table.html',
					controller: 'OrdersCtrl',
					controllerAs: 'vm'
				},
				'products@my-account': {
					templateUrl: 'scripts/my-account/products-table.html',
					controller: 'ProductsCtrl',
					controllerAs: 'vm'
				},
				'users@my-account': {
					templateUrl: 'scripts/my-account/users-table.html',
					controller: 'UsersCtrl',
					controllerAs: 'vm'
				},
				'calendar@my-account': {
					templateUrl: 'scripts/my-account/calendar.html',
					controller: 'CalendarCtrl',
					controllerAs: 'vm'
				},
				'footer': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				pageTitle: 'My account'  + websiteTitle,
				pageBodyClass: 'auth'
			}
		});
	}
})();