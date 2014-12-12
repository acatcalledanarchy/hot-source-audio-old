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
			changePassword: function(emailAddress, oldPassword, newPassword) {
				return auth.$changePassword(emailAddress, oldPassword, newPassword);
			},
		    createProfile: function(user) {
				var profile = {
					md5_hash: user.md5_hash,
					email: user.email,
					first_name: user.firstName,
					last_login: new Date().getTime(),
					is_admin: false,
					surname: user.surname,
					created_on: new Date().getTime()
				};
				var profileRef = $firebase(ref.child('profile'));
				return profileRef.$set(user.uid, profile);
			},
			get: function(userId) {
				return $firebase(ref.child('profile').child(userId)).$asObject();
			},
			isAdmin: function() {
				if(Service.user.profile && Service.user.profile.is_admin) {
					return Service.user.profile.is_admin;
				}
				return false;
			},
			newIsAdmin: function(userId) {
				//console.log('New is admin', userId);
				var userRef = $firebase(ref.child('profile').child(userId)).$asObject();
				userRef.$loaded().then(function(user) {
					console.log(user);
					console.log(user.is_admin);
					return user.is_admin;
				});
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
		    register: function(user) {
				return auth.$createUser(user.email, user.password);
		    },
		    resolveUser: function() {
				return auth.$getCurrentUser();
		    },
		    signedIn: function() {
				return !!Service.user.provider;
		    },
		    update: function(user) {
		    	return user.$save();
		    },
			updateAdminStatus: function(userId, isAdmin) {
				var userRef = $firebase(ref.child('profile').child(userId)).$asObject();
				userRef.$loaded().then(function(user) {
					user.is_admin = isAdmin;
					return Service.update(user);
				});
			},
		    user: {}
		};

		$rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
			toastr.success('Logged in');
			angular.copy(user, Service.user);
			Service.user.profile = $firebase(ref.child('profile').child(Service.user.uid)).$asObject();

			var userRef = $firebase(ref.child('profile').child(Service.user.uid));
			userRef.$update({ last_login: new Date().getTime() });
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