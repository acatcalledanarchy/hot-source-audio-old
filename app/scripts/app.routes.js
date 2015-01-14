/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.config(config)
		.run(runBlock);

	config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'WEBSITE_SETTINGS'];

	function config($stateProvider, $urlRouterProvider, $locationProvider, WEBSITE_SETTINGS) {

		var addressLine,
			client,
			contactUsKeywords = [],
			contactUsDescription = [],
			description,
			i,
			j,
			keywords,
			showreelKeywords = ['clients', 'showreel', 'audio', 'video'],
			showreelDescription = [],
			websiteTitle = ' | ' + WEBSITE_SETTINGS.TITLE;

		//////////////////////////////////////////////////////////////////////////////////

		for(i in WEBSITE_SETTINGS.CLIENTS) {
			client = WEBSITE_SETTINGS.CLIENTS[i].NAME;
			showreelKeywords.push(client);
		}

		for(i in WEBSITE_SETTINGS.SHOWREEL.VIDEOS) {
			description = WEBSITE_SETTINGS.SHOWREEL.VIDEOS[i].COPY;
			keywords = WEBSITE_SETTINGS.SHOWREEL.VIDEOS[i].TITLE.toLowerCase().split(' ');
			for(j in keywords) {
				if(showreelKeywords.indexOf(keywords[j]) < 0) {
					showreelKeywords.push(keywords[j]);		
				}
			}
			showreelDescription.push(description);
		}

		for(i in WEBSITE_SETTINGS.SHOWREEL.MP3S) {
			description = WEBSITE_SETTINGS.SHOWREEL.MP3S[i].COPY;
			keywords = WEBSITE_SETTINGS.SHOWREEL.MP3S[i].TITLE.toLowerCase().split(' ');
			for(j in keywords) {
				if(showreelKeywords.indexOf(keywords[j]) < 0) {
					showreelKeywords.push(keywords[j]);	
				}
			}
			showreelDescription.push(description);
		}

		showreelDescription = showreelDescription.join(' ');
		showreelKeywords = showreelKeywords.join(', ');

		////////////////////////////////////////////////////////////////////////////////////

		for(i in WEBSITE_SETTINGS.ADDRESS) {
			addressLine = WEBSITE_SETTINGS.ADDRESS[i];
			contactUsDescription.push(addressLine);
			addressLine = addressLine.split(' ');
			for(j in addressLine) {
				if(contactUsKeywords.indexOf(addressLine[j]) < 0) {
					contactUsKeywords.push(addressLine[j]);
				}
			}
		}

		contactUsDescription = contactUsDescription.join(', ');
		contactUsKeywords = contactUsKeywords.join(', ');

		////////////////////////////////////////////////////////////

		$stateProvider
		.state('app', {
			abstract: true
		})
		.state('app.home', {
			url: '/',
			views: {
				'header@': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},
				'page-content@': {
					templateUrl:  'scripts/home/home.html',
					controller:  'HomeCtrl',
					controllerAs: 'vm'
				},
				'page-banner@': {
					templateUrl: 'scripts/layout/banner.html',
					controller: 'HomeBannerCtrl',
					controllerAs: 'vm'
				},
				'logo-overlay@': {
					templateUrl: 'scripts/layout/logo-overlay.html'
				},
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				page: {
					title: 'Home' + websiteTitle,
					bodyClass: 'home'
				},
				meta: {
					description: WEBSITE_SETTINGS.PAGES.HOME.META.DESCRIPTION,
					keywords: WEBSITE_SETTINGS.PAGES.HOME.META.KEYWORDS
				}
			}
		})
		.state('app.studio', {
			url: '/studio',
			views: {
				'header@': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},
				'page-content@': {
					templateUrl:  'scripts/studio/studio.html',
					controller:  'StudioCtrl',
					controllerAs: 'vm'
				},
				'page-banner@': {
					templateUrl: 'scripts/layout/banner.html',
					controller: 'StudioBannerCtrl',
					controllerAs: 'vm'
				},
				'logo-overlay@': {
					templateUrl: 'scripts/layout/logo-overlay.html'
				},
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				page: {
					title: 'Studio' + websiteTitle,
					bodyClass: 'studio'
				},
				meta: {
					description: WEBSITE_SETTINGS.PAGES.STUDIO.META.DESCRIPTION,
					keywords: WEBSITE_SETTINGS.PAGES.STUDIO.META.KEYWORDS
				}
			}
		})
		.state('app.about-us', {
			url: '/about-us', 	
			views: {
				'header@': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},		
				'page-content@': {
					templateUrl:  'scripts/about-us/about-us.html',
					controller:  'AboutUsCtrl',
					controllerAs: 'vm'
				},	
				'page-banner@': {
					templateUrl: 'scripts/layout/banner.html',
					controller: 'AboutUsBannerCtrl',
					controllerAs: 'vm'
				},	
				'logo-overlay@': {
					templateUrl: 'scripts/layout/logo-overlay.html'
				},		
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				page: {
					title: 'About us' + websiteTitle,
					bodyClass: 'about-us'
				},
				meta: {
					description: WEBSITE_SETTINGS.PAGES.ABOUT_US.META.DESCRIPTION,
					keywords: WEBSITE_SETTINGS.PAGES.ABOUT_US.META.KEYWORDS
				}
			}
		})
		.state('app.our-work', {
			url: '/our-work', 	
			views: {
				'header@': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},		
				'page-content@': {
					templateUrl:  'scripts/our-work/our-work.html',
					controller:  'OurWorkCtrl',
					controllerAs: 'vm'
				},	
				'page-banner@': {
					templateUrl: 'scripts/layout/banner.html',
					controller: 'OurWorkBannerCtrl',
					controllerAs: 'vm'
				},	
				'logo-overlay@': {
					templateUrl: 'scripts/layout/logo-overlay.html'
				},		
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				page: {
					title: 'Our work' + websiteTitle,
					bodyClass: 'our-work',
				},
				meta: {
					description: showreelDescription,
					keywords: showreelKeywords
				}
			}
		})	
		.state('app.contact-us', {
			url: '/contact-us',	
			views: {
				'header@': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},	
				'page-content@': {
					templateUrl: 'scripts/contact-us/contact-us.html',
					controller: 'ContactUsCtrl',
					controllerAs: 'vm'
				},
				'page-banner@': {
					templateUrl: 'scripts/layout/banner.html',
					controller: 'ContactUsBannerCtrl',
					controllerAs: 'vm'
				},	
				'logo-overlay@': {
					templateUrl: 'scripts/layout/logo-overlay.html'
				},			
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}        
			},
			data: {
				page: {
					title: 'Contact us' + websiteTitle,
					bodyClass: 'contact-us'
				},
				meta: {
					description: contactUsDescription,
					keywords: contactUsKeywords
				}
			}
		})
		.state('app.404', {
			url: '/404',	
			views: {
				'header@': {
					templateUrl: 'scripts/layout/header.html',
					controller: 'HeaderCtrl',
					controllerAs: 'vm'
				},			
				'page-content@': {
					templateUrl: 'scripts/error/error.html',
					controller: 'ErrorCtrl',
					controllerAs: 'vm'
				},	
				'page-banner@': {
					templateUrl: 'scripts/layout/banner.html',
					controller: 'ErrorBannerCtrl',
					controllerAs: 'vm'
				},
				'logo-overlay@': {
					templateUrl: 'scripts/layout/logo-overlay.html'
				},	
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}        
			},
			data: {
				page: {
					title: '404 error' + websiteTitle,
					bodyClass: 'error'
				},
				meta: {
					description: '',
					keywords: ''
				}
			}
		});

		$locationProvider.hashPrefix('!');
		$urlRouterProvider
			.when('', '/')
			.otherwise('/404');
	}

	runBlock.$inject = ['$rootScope', '$state', '$stateParams', '$location', '$window'];

	function runBlock($rootScope, $state, $stateParams, $location, $window) {
		$rootScope.$on('$stateChangeSuccess', function() {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
			if ($window.ga) {
		        $window.ga('send', 'pageview', {
		        	page: $location.path()
		        });		
			}
        });
	} 

})();