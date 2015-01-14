(function() {

    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngAnimate', 'ngAria', 'ngResource', 'ngSanitize', 'ngTouch', 'ui.router',
        /*
         * 3rd Party modules
         */
        'angular-loading-bar', 'ngMap', 'angulartics', 'angulartics.google.analytics', 'mm.foundation', 'angular-carousel', 'ngScrollTo',
        /*
         * Videogular
         */
        'com.2fdevs.videogular', 'com.2fdevs.videogular.plugins.controls', 'com.2fdevs.videogular.plugins.overlayplay', 'com.2fdevs.videogular.plugins.poster', 'com.2fdevs.videogular.plugins.buffering', 'com.2fdevs.videogular.plugins.poster'
    ]);

})();