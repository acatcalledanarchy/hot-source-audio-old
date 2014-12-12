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
                FONT_ICON: 'fa fa-ticket',
                PAY_PAL_EMAIL_ADDRESS: 'acatcalledanarchy@gmail.com',
                PRODUCT_QUANTITY_LABEL: 'places',
                PRODUCT_ORDER_LABEL: 'bookings',
                PRODUCT_TYPE: 'class',
                TITLE: 'Classes'
            },
            GOOGLE: {
                MAP: {
                    LATITUDE: 49.2167,
                    LONGITUDE: -2.1167,
                    MARKER_ICON: 'yoga-lessons-marker.png'
                },
                ANALYTICS: {
                    TRACKING_ID: 'UA-57546047-1'
                }
            },
            ADDRESS: {
                LINE_1: '10 Heavenly Place',
                LINE_2: 'Rohais',
                PARISH: 'St. Saviour',
                ISLAND: 'Jersey',
                POSTCODE: 'JE1 12B'
            }
        };

    angular
        .module('app.core')
        .constant('WEBSITE_SETTINGS', WEBSITE_SETTINGS)
        .constant('FIREBASE_URL', FIREBASE_ACCOUNT + '.firebaseio.com/')
        .constant('toastr', toastr)
        .constant('moment', moment);
})();