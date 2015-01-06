/* global toastr:false */
/* global moment:false */

(function() {
    
    'use strict';

    var FIREBASE_ACCOUNT = 'http://oi-digital',
        WEBSITE_SETTINGS = {
            TITLE: 'Hot Source Audio Productions',
            BASE_URL: FIREBASE_ACCOUNT + '.firebaseapp.com/',
            GOOGLE: {
                MAP: {
                    LATITUDE: 49.4604184,
                    LONGITUDE: -2.5458709,
                    MARKER_ICON: 'yoga-lessons-marker.png'
                },
                ANALYTICS: {
                    TRACKING_ID: 'UA-57546047-1'
                }
            },
            EMAIL_ADDRESS: 'info@hotsourceaudio.com',
            TELEPHONE_NUMBER: '+44 (0) 1481 726622',
            FAX_NUMBER: '+44 (0) 1481 726918',
            ADDRESS: {
                LINE_1: 'PO Box 414',
                LINE_2: 'St Jacques',
                PARISH: 'St Peter Port',
                ISLAND: 'Guernsey',
                AREA: 'Channel Islands',
                POSTCODE: 'GY1 3WG'
            }
        };

    angular
        .module('app.core')
        .constant('WEBSITE_SETTINGS', WEBSITE_SETTINGS)
        .constant('FIREBASE_URL', FIREBASE_ACCOUNT + '.firebaseio.com/')
        .constant('toastr', toastr)
        .constant('moment', moment);
})();