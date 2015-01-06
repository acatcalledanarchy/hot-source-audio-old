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
				Auth: 'Auth',
				user: function(Auth) {
					return Auth.resolveUser().then(function(user) {
						return user;
					});
				}
			}
		})
		.state('app.home', {
			url: '/',
			resolve: {
				Auth: 'Auth',
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
		.state('app.about-us', {
			url: '/about-us', 
			resolve: {
				Auth: 'Auth',
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
					controller: 'AboutBackgroundCtrl',
					controllerAs: 'vm'
				},		
				'page-content@': {
					templateUrl:  'scripts/about-us/about-us.html',
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
				pageTitle: 'About us' + websiteTitle,
				pageBodyClass: 'about'
			}
		})
		.state('app.showreel', {
			url: '/showreel', 
			resolve: {
				Auth: 'Auth',
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
					controller: 'ShowreelBackgroundCtrl',
					controllerAs: 'vm'
				},		
				'page-content@': {
					templateUrl:  'scripts/showreel/showreel.html',
					controller:  'ShowreelCtrl',
					controllerAs: 'vm'
				},			
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				pageTitle: 'Showreel' + websiteTitle,
				pageBodyClass: 'showreel'
			}
		})
		.state('app.library-music', {
			url: '/library-music', 
			resolve: {
				Auth: 'Auth',
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
					controller: 'LibraryMusicBackgroundCtrl',
					controllerAs: 'vm'
				},		
				'page-content@': {
					templateUrl:  'scripts/library-music/library-music.html',
					controller:  'LibraryMusicCtrl',
					controllerAs: 'vm'
				},			
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				pageTitle: 'Showreel' + websiteTitle,
				pageBodyClass: 'showreel'
			}
		})		
		.state('app.contact-us', {
			url: '/contact-us',
			resolve: {
				Auth: 'Auth',
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
					controller: 'ContactBackgroundCtrl',
					controllerAs: 'vm'
				},			
				'page-content@': {
					templateUrl: 'scripts/contact-us/contact-us.html',
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
				pageTitle: 'Contact us' + websiteTitle,
				pageBodyClass: 'contact'
			}
		})
		.state('app.privacy-policy', {
			url: '/privacy-policy',
			resolve: {
				Auth: 'Auth',
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
					controller: 'PrivacyPolicyBackgroundCtrl',
					controllerAs: 'vm'
				},	
				'page-content@': {
					templateUrl: 'scripts/privacy-policy/privacy-policy.html',
					controller: 'PrivacyPolicyCtrl',
					controllerAs: 'vm'
				},		
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}        
			},
			data: {
				pageTitle: '404 Error' + websiteTitle,
				pageBodyClass: 'error'
			}
		})
		.state('app.404', {
			url: '/404',
			resolve: {
				Auth: 'Auth',
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
					controller: 'ErrorBackgroundCtrl',
					controllerAs: 'vm'
				},	
				'page-content@': {
					templateUrl: 'scripts/error/error.html',
					controller: 'ErrorCtrl',
					controllerAs: 'vm'
				},		
				'footer@': {
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

		$urlRouterProvider.otherwise('/404');
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