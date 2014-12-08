/* jshint latedef: false */
/* jshint camelcase: false */
/* global Firebase */

(function() {

	'use strict';

	angular
		.module('app.auth')
		.factory('Auth', Auth);	

	Auth.$inject = ['$firebase', '$firebaseSimpleLogin', 'FIREBASE_URL', '$rootScope', 'toastr'];

	function Auth($firebase, $firebaseSimpleLogin, FIREBASE_URL, $rootScope, toastr) {
		
		var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseSimpleLogin(ref);
		var users = $firebase(ref.child('profile')).$asArray();
		
		var Service = {
			all: users,
		    register: function(user) {
		      return auth.$createUser(user.email, user.password);
		    },
		    createProfile: function(user) {
				var profile = {
					username: user.username,
					md5_hash: user.md5_hash,
					email: user.email,
					first_name: user.firstName,
					surname: user.surname,
					created_on: new Date().getTime()
				};
				var profileRef = $firebase(ref.child('profile'));
				return profileRef.$set(user.uid, profile);
			},
		    login: function(user) {
		      	return auth.$login('password', user);
		    },
		    logout: function () {
		      auth.$logout();
		    },
    		oAuthLogin: function(provider) {
				return auth.$login(provider, {
					rememberMe: true
				});	
			},
		    resolveUser: function() {
		      return auth.$getCurrentUser();
		    },
		    signedIn: function() {
		      return !!Service.user.provider;
		    },
			isAdmin: function() {
				return typeof Service.user.profile !== 'undefined' ? Service.user.profile.isAdmin : false;
			},
		    user: {}
		};

		$rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
			toastr.success('Logged in');
			angular.copy(user, Service.user);
			Service.user.profile = $firebase(ref.child('profile').child(Service.user.uid)).$asObject();
			// Update last login
		});

		$rootScope.$on('$firebaseSimpleLogin:logout', function() {
			toastr.warning('Logged out');
			if(Service.user && Service.user.profile) {
				Service.user.profile.$destroy();
			}
			angular.copy({}, Service.user);
		});

		return Service;
	}

})();