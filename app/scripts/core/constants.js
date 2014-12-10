/* global toastr:false */
/* global moment:false */

(function() {
    
    'use strict';

    var FIREBASE_ACCOUNT = 'http://oi-digital',
        WEBSITE_SETTINGS = {
        TITLE: 'Lovely Yoga',
        LOGO: 'yoga-lessons-logo.png',
        BASE_URL: FIREBASE_ACCOUNT + '.firebaseapp.com/',
        SHOP: {
            BUY_NOW_LABEL: 'Book lesson',
            FONT_AWESOME_ICON: 'fa-ticket',
            PAY_PAL_EMAIL_ADDRESS: 'acatcalledanarchy@gmail.com',
            PRODUCT_QUANTITY_LABEL: 'places',
            PRODUCT_ORDER_LABEL: 'bookings',
            PRODUCT_TYPE: 'class',
            TITLE: 'Classes'
        },
        GOOGLEMAP: {
            LATITUDE: 49.2167,
            LONGITUDE: -2.1167,
            MARKER_ICON: 'yoga-lessons-marker.png'
        }
    };

    angular
        .module('app.core')
        .constant('WEBSITE_SETTINGS', WEBSITE_SETTINGS)
        .constant('FIREBASE_URL', FIREBASE_ACCOUNT + '.firebaseio.com/')
        .constant('toastr', toastr)
        .constant('moment', moment);
})();