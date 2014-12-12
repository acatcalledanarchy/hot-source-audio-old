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
		.state('app.login', {
			url: '/login',
			resolve: {
				user: function(Auth) {
					return Auth.resolveUser();
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
					templateUrl: 'scripts/auth/login.html',
					controller: 'AuthCtrl',
					controllerAs: 'vm'
				},
				'login-form@app.login': {
					templateUrl: 'scripts/auth/login-form.html',
					controller: 'LoginFormCtrl',
					controllerAs: 'vm'
				},
				'register-form@app.login': {
					templateUrl: 'scripts/auth/register-form.html',
					controller: 'RegisterFormCtrl',
					controllerAs: 'vm'
				},
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				pageTitle: 'Login' + websiteTitle,
				pageBodyClass: 'auth'
			}
		});
	}
})();