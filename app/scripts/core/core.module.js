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
        'angular-loading-bar', 'firebase', 'ngMap', 'toastr', 'angulartics', 'angulartics.google.analytics', 'mm.foundation', 'duScroll',

        'com.2fdevs.videogular', 'com.2fdevs.videogular.plugins.controls', 'com.2fdevs.videogular.plugins.overlayplay', 'com.2fdevs.videogular.plugins.poster', 'com.2fdevs.videogular.plugins.buffering', 'info.vietnamcode.nampnq.videogular.plugins.youtube'
    ]);

})();