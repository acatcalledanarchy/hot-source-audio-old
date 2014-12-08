(function() {

    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngAnimate', 'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngSanitize', 'ngTouch', 'ui.router',
        /*
         * Our reusable cross app code modules
         */
       	// 'blocks.exception', 'blocks.logger', 'blocks.router',
        /*
         * 3rd Party modules
         */
        'angular-loading-bar', 'firebase', 'ui.bootstrap.tabs', 'ngCart', 'ngMap', 'toastr'
    ]);

})();