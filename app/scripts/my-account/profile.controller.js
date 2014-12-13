/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('ProfileCtrl', ProfileCtrl);

	ProfileCtrl.$inject = ['user'];

	function ProfileCtrl(user) {

		var vm = this;
		vm.profile = {};
		vm.user = user;

		switch(vm.user.provider) {
			case 'password':
				vm.profile.avatar = '//www.gravatar.com/avatar/' + vm.user.md5_hash;
				vm.profile.displayName = vm.user.first_name + ' ' + vm.user.surname;
				vm.profile.emailAddress = vm.user.email;
			break;
			case 'facebook':
				vm.profile.avatar = vm.user.thirdPartyUserData.picture.data.url;
				vm.profile.displayName = vm.user.displayName;
				vm.profile.emailAddress = vm.user.thirdPartyUserData.email;
			break;
			case' twitter':
			break;
		}
	}

})();