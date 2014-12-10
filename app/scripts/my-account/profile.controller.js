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
		
		Auth.get(Auth.user.uid).$loaded().then(function(user) {
    		vm.profile = {};
    		switch(Auth.user.provider) {
				case 'password':
					vm.profile.displayName = user.first_name + ' ' + user.surname;
					vm.profile.avatar = '//www.gravatar.com/avatar/' + user.md5_hash;
					vm.profile.emailAddress = user.email;
				break;
				case 'facebook':
					vm.profile.displayName = Auth.user.displayName;
					vm.profile.avatar = Auth.user.thirdPartyUserData.picture.data.url;
					vm.profile.emailAddress = Auth.user.thirdPartyUserData.email;
				break;
				case' twitter':
				break;
			}
		});
	}

})();