/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app.auth')
		.config(config);

	config.$inject = ['$stateProvider', 'WEBSITE_SETTINGS'];

	function config($stateProvider, WEBSITE_SETTINGS) {

		var websiteTitle = ' | ' + WEBSITE_SETTINGS.TITLE;

		$stateProvider
		.state('login', {
			url: '/login',
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
					templateUrl: 'scripts/auth/login.html',
					controller: 'AuthCtrl',
					controllerAs: 'vm',
					resolve: {
						user: function(Auth) {
							return Auth.resolveUser();
						}
					}
				},
				'page-overlay': {
					templateUrl: 'scripts/layout/overlay.html',
					controller: 'OverlayCtrl',
					controllerAs: 'vm'
				},
				'login-form@login': {
					templateUrl: 'scripts/auth/login-form.html',
					controller: 'LoginFormCtrl',
					controllerAs: 'vm'
				},
				'register-form@login': {
					templateUrl: 'scripts/auth/register-form.html',
					controller: 'RegisterFormCtrl',
					controllerAs: 'vm'
				},
				'footer': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				pageTitle: 'Login' + websiteTitle,
				pageBodyClass: 'auth'
			}
		})
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
					templateUrl: 'scripts/auth/my-account.html',
					controller: 'MyAccountCtrl',
					controllerAs: 'vm',
					resolve: {
						user: function(Auth) {
							return Auth.resolveUser();
						}
					}
				},
				'page-overlay': {
					templateUrl: 'scripts/layout/overlay.html',
					controller: 'OverlayCtrl',
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
		})
		.state('users', {
			url: '/users',
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
					templateUrl: 'scripts/auth/user.html',
					controller: 'UserCtrl',
					controllerAs: 'vm',
					resolve: {
						users: function(Auth) {
							return Auth.all;
						}
					}
				},
				'page-overlay': {
					templateUrl: 'scripts/layout/overlay.html',
					controller: 'OverlayCtrl',
					controllerAs: 'vm'
				},
				'footer': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				pageTitle: 'Users' + websiteTitle,
				pageBodyClass: 'auth'
			}
		});
	}
})();