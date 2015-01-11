(function() {
    
    'use strict';

    var WEBSITE_SETTINGS = {
            TITLE: 'Hot Source Audio Productions',
            GOOGLE: {
                MAP: {
                    LATITUDE: 49.4604184,
                    LONGITUDE: -2.5458709,
                    MARKER_ICON: 'hotsource-marker.png'
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
            },
            FACEBOOK_URL: 'https://facebook.com/',
            TWITTER_URL: 'https://twitter.com/HotsourceAudio',
            PAGES: {
                HOME: {
                    PAGE_COPY: '<p>Hot Source is an independent audio production company working with radio stations, digital media, television &amp; film production companies, and advertising agencies. ' +
                    'Our services include radio script writing, radio production, bespoke music composition and sound design within audio branding strategies.</p>' +
                    '<p>We have a passion to make your brand sound great whether it&#39;s at national, regional or local level. Our recording studios (some 20ft underground) are set in the former WWII German Naval Command Bunker during the occupation… so it&#39;s the perfect location. ' +
                    '(We&#39;ve been here longer than the German occupying forces you know!)</p><p>In addition to creating audio campaigns for clients we also work with media creative to produce finished productions across traditional and digital media including copy for website and social media.</p>'
                },
                ABOUT_US: {
                    INTRO_COPY: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + 
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
                },
                SHOWREEL: {
                    INTRO_COPY: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + 
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
                },
                CONTACT_US: {
                    INTRO_COPY: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + 
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
                },
                PRIVACY_POLICY: {
                    PAGE_COPY: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + 
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
                }
            },
            SLIDES: [
                'banner-1.jpg',
                'banner-2.jpg',
                'banner-3.jpg',
                'banner-4.jpg',
                'banner-5.jpg'
            ],
            EMPLOYEES: [
                { FIRST_NAME: 'Simon', SURNAME: 'Prince', EMAIL_ADDRESS: 'simon@hotsourceaudio.com', IMAGE: 'simon.jpg', TELEPHONE_NUMBER: '+44 (0) 1481 711111', COPY: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                { FIRST_NAME: 'Mark', SURNAME: 'Adnitt', EMAIL_ADDRESS: 'mark@hotsourceaudio.com', IMAGE: 'mark.jpg', TELEPHONE_NUMBER: '+44  (0) 1481 711112', COPY: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                { FIRST_NAME: 'Nick', SURNAME: 'Windsor', EMAIL_ADDRESS: 'nick@hotsourceaudio.com', IMAGE: 'nick.jpg', TELEPHONE_NUMBER: '+4 (0) 1481 711113', COPY: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
            ],
            SHOWREEL: {
                AUDIO: {

                },
                VIDEO: {

                }
            },
            CLIENTS: [
                { NAME: '7up', IMAGE: '7up.png' },
                { NAME: 'B&amp;Q', IMAGE: 'b-and-q.png' },
                { NAME: 'British Airways', IMAGE: 'british-airways.png' },
                { NAME: 'Castrol', IMAGE: 'castrol.png' },
                { NAME: 'Emirates', IMAGE: 'emirates.png' },
                { NAME: 'Lexus', IMAGE: 'lexus.png' },
                { NAME: 'Lloyds TSB', IMAGE: 'lloyds-tsb.png' },
                { NAME: 'Northern Trust', IMAGE: 'northern-trust.png' },
                { NAME: 'SpecSavers', IMAGE: 'specsavers.png' },
                { NAME: 'Time Out Dubai', IMAGE: 'time-out-dubai.png' },
                { NAME: 'Transport for London', IMAGE: 'transport-for-london.png' },
                { NAME: 'Virgin Atlantic', IMAGE: 'virgin-atlantic.png' }
            ]
        };

    angular
        .module('app.core')
        .constant('WEBSITE_SETTINGS', WEBSITE_SETTINGS);
})();