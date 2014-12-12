/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('ProfileCtrl', ProfileCtrl);

	ProfileCtrl.$inject = ['Auth'];

	function ProfileCtrl(Auth) {

		var vm = this;

		Auth.user.profile.$loaded().then(function(profile) {
    		vm.profile = {};
    		switch(Auth.user.provider) {
				case 'password':
					vm.profile.avatar = '//www.gravatar.com/avatar/' + profile.md5_hash;
					vm.profile.displayName = profile.first_name + ' ' + profile.surname;
					vm.profile.emailAddress = profile.email;
				break;
				case 'facebook':
					vm.profile.avatar = profile.thirdPartyUserData.picture.data.url;
					vm.profile.displayName = profile.displayName;
					vm.profile.emailAddress = profile.thirdPartyUserData.email;
				break;
				case' twitter':
				break;
			}
		});
	}

})();