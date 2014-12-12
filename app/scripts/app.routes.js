/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.config(config)
		.run(runBlock);

	config.$inject = ['$stateProvider', '$urlRouterProvider', 'WEBSITE_SETTINGS'];

	function config($stateProvider, $urlRouterProvider, WEBSITE_SETTINGS) {

		var websiteTitle = ' | ' + WEBSITE_SETTINGS.TITLE;

		$stateProvider
		.state('app', {
			abstract: true,
			resolve: {
				user: function(Auth) {
					return Auth.resolveUser();
				}
			},
		})
		.state('app.home', {
			url: '/',
			views: {
				'header@': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},
				'page-background@': {
					controller: 'HomeBackgroundCtrl',
					controllerAs: 'vm'
				},
				'page-content@': {
					templateUrl:  'scripts/home/home.html',
					controller:  'HomeCtrl',
					controllerAs: 'vm'
				},
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				pageTitle: 'Home' + websiteTitle,
				pageBodyClass: 'home'
			}
		})
		.state('app.about', {
			url: '/about', 
			views: {
				'header@': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},		
				'page-background@': {
					controller: 'AboutBackgroundCtrl',
					controllerAs: 'vm'
				},		
				'page-content@': {
					templateUrl:  'scripts/about/about.html',
					controller:  'AboutCtrl',
					controllerAs: 'vm'
				},			
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				pageTitle: 'About' + websiteTitle,
				pageBodyClass: 'about'
			}
		})
		.state('app.contact', {
			url: '/contact',
			views: {
				'header@': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},	
				'page-background@': {
					controller: 'ContactBackgroundCtrl',
					controllerAs: 'vm'
				},			
				'page-content@': {
					templateUrl: 'scripts/contact/contact.html',
					controller: 'ContactCtrl',
					controllerAs: 'vm'
				},			
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}        
			},
			data: {
				pageTitle: 'Contact' + websiteTitle,
				pageBodyClass: 'contact'
			}
		})
		.state('404', {
			url: '/404',
			views: {
				'header': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},			
				'page-background': {
					controller: 'ErrorBackgroundCtrl',
					controllerAs: 'vm'
				},	
				'page-content': {
					templateUrl: 'scripts/error/error.html',
					controller: 'ErrorCtrl',
					controllerAs: 'vm'
				},		
				'footer': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}        
			},
			data: {
				pageTitle: '404 Error' + websiteTitle,
				pageBodyClass: 'error'
			}
		});

		$urlRouterProvider.otherwise('/');
	}

	runBlock.$inject = ['$rootScope', '$state', '$stateParams', '$location', '$window', 'WEBSITE_SETTINGS'];

	function runBlock($rootScope, $state, $stateParams, $location, $window, WEBSITE_SETTINGS) {
		$rootScope.$on('$stateChangeSuccess', function() {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
			$rootScope.$stateParams.googleAnalyticsTrackingId = WEBSITE_SETTINGS.GOOGLE.ANALYTICS.TRACKING_ID; //!XXX This maybe a terrible hack?
			if ($window.ga) {
		        $window.ga('send', 'pageview', {
		        	page: $location.path()
		        });		
			}
        });
	} 

})();