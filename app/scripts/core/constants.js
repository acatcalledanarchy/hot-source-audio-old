(function() {
    
    'use strict';

    var WEBSITE_SETTINGS = {
            TITLE: 'Hot Source',
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
                    META: {
                        DESCRIPTION: 'Hot Source is an independent audio production company based in Guernsey in the Channel Islands.',
                        KEYWORDS: 'audio, production, radio, tv, film, voiceover, podcasts, restoration, commercial, music, online, digital, conversion, dat, minidisc, reel, cassette'
                    },  
                    INTRO_COPY: '<p>Hot Source is an independent audio production company based in Guernsey in the Channel Islands. We are passionate about defining your brand with creative audio that connects and engages emotionally with your customers producing successful results.</p>',
                    HOW_WE_WORK_COPY: '<p>We like to meet with you, get an overview of where you are with your current marketing and identify objectives.</p>' +
                        '<p>We like to agree the creative brief then go to work.</p>' +
                        '<p>We work to brief and price accordingly. Where possible we will supply audio examples and cost guides, making sure you understand what is achievable for the final budget. We will also present demos where appropriate.</p>' +
                        '<p>If you already have an creative agency on board we can work develop ideas with them or purely as a production house.</p>',
                    SERVICES: [
                        {
                            TITLE: 'Radio commercial production',
                            IMAGE: 'studio.jpg',
                            COPY: '<p>We write and produce radio commercials including scriptwriting, voice-over casting & recording, bespoke music branding.</p>',
                            LINK: {
                                URL: 'radio',
                                TEXT: 'Listen to showreel'
                            }
                        },
                        {
                            TITLE: 'Music & voice for TV, Film',
                            IMAGE: 'music-composition.jpg',
                            COPY: '<p>Sound design and audio branding for TV commercials, bespoke music composition for film/documentary/digital video.</p>'
                        },
                        {
                            TITLE: 'Music & voice online/digital',
                            IMAGE: 'amp.jpg',
                            COPY: '<p>Copywriting, voice casting and recording, music and sound design for online video, podcasts and audio books.</p>',
                            LINK: {
                                URL: '#',
                                TEXT: 'Listen to showreel'
                            }
                        },
                        {
                            TITLE: 'Media conversion/audio restoration',
                            IMAGE: 'audio-restoration.jpg',
                            COPY: '<p>We offer audio restoration work on those long lost audio recordings of yester year using, reel to reel machines, cassette dubbing decks, Mini disc and DAT.</p>'
                        }
                    ]
                },
                STUDIO: {
                    META: {
                        DESCRIPTION: 'Our studios are situated in the former WW2 German Naval Command Communications Bunker built during the 1940/45 occupation. Code named Seeko-Ki it housed one of the legendary enigma coding machines.',
                        KEYWORDS: 'studio, ww2, german, naval, command, seeko-ki, isdn, real-time, audio, drum, vocal, booth, live, guitar, room, enigma, coding, machine'
                    },
                    INTRO_COPY: '<p>Our studios are situated in the former WW2 German Naval Command Communications Bunker built during the 1940/45 occupation. Code named Seeko-Ki it housed one of the legendary enigma coding machines.</p>' +
                        '<p>Other than the two most essential pieces of kit (our ears and imagination) we have all the industry leading hardware and software at hand to create music and sound design bringing your productions to life.</p>' +
                        '<p>Via ISDN we can link with studios for real-time audio connections across the globe making voice talent available to any producers working at our facilities.</p>' +
                        '<p>A live drum room, vocal booth and live guitar room compliments the two main production studios.</p>'
                },
                ABOUT_US: {
                    META: {
                        DESCRIPTION: '',
                        KEYWORDS: ''
                    },
                    INTRO_COPY: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + 
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
                },
                OUR_WORK: {
                    META: {
                        DESCRIPTION: '',
                        KEYWORDS: ''
                    },
                    INTRO_COPY: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + 
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
                },
                CONTACT_US: {
                    META: {
                        DESCRIPTION: '',
                        KEYWORDS: ''
                    },
                    INTRO_COPY: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + 
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
                },
                PRIVACY_POLICY: {
                    META: {
                        DESCRIPTION: '',
                        KEYWORDS: ''
                    },
                    PAGE_COPY: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + 
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
                }
            },
            SLIDES: [
                'gear.jpg'/*,
                'banner-4.jpg'*/
            ],
            EMPLOYEES: [
                {
                    FIRST_NAME: 'Simon',
                    SURNAME: 'Prince',
                    JOB_TITLE: 'Producer/composer/sound designer',
                    EMAIL_ADDRESS: 'simon@hotsourceaudio.com',
                    IMAGE: 'simon.jpg',
                    TELEPHONE_NUMBER: '+44 (0) 1481 711111',
                    COPY: '<p>A stickler for timing (he&rsquo;s also a highly respected drummer/percussionist) Simon left Leeds College of Music fully trained in studio engineering.</p>' +
                        '<p>Now he works with creative writing and producing audio including voice casting, music branding and sound design across traditional and digital media.</p>'
                },
                {
                    FIRST_NAME: 'Mark',
                    SURNAME: 'Adnitt',
                    JOB_TITLE: 'Founding Partner – script writer/music composition/production',
                    EMAIL_ADDRESS: 'mark@hotsourceaudio.com',
                    IMAGE: 'mark.jpg',
                    TELEPHONE_NUMBER: '+44  (0) 1481 711112',
                    COPY: '<p>Since converting the bunker to studios back in 1992 Mark has written and produced commercials for almost every business sector. His work has travelled far and wide... local radio, UK commercial radio and Television and more.</p><p>Clients value his experience, amiable character and his ability to catch many lobsters each summer. Ask him from where though and expect a stony silence.</p>'
                },
                {
                    FIRST_NAME: 'Nick',
                    SURNAME: 'Windsor',
                    JOB_TITLE: 'Founding Partner – script writer/music composition/production',
                    EMAIL_ADDRESS: 'nick@hotsourceaudio.com',
                    IMAGE: 'nick.jpg',
                    TELEPHONE_NUMBER: '+4 (0) 1481 711113',
                    COPY: '<p>Backed by years of experience in advertising and marketing in Guernsey, London and Australia clients count on Nick for insightful guidance on all aspects of their Marketing.</p><p>A true audio/visual person, experienced musician, composer, art director...he has written and consulted for well-respected local, national and global brands in on radio, TV and digital media.</p><p>Fellow creatives and clients feed off his passion and straight talking for the subject.</p>' }
            ],
            SHOWREEL: {
                MP3S: [
                    {
                        TITLE: 'Radio commercials showreel',
                        PAGE_ANCHOR: 'radio-commericals-showreel',
                        COPY: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
                        FILES: [
                            { SRC: 'https://dl.dropboxusercontent.com/u/4809757/website-showreel/audio/ad-showreel-2013.mp3', TYPE: 'audio/mpeg' }
                        ]
                    },
                    {
                        TITLE: 'Music showreel',
                        PAGE_ANCHOR: 'music-showreel',
                        COPY: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
                        FILES: [
                            { SRC: 'https://dl.dropboxusercontent.com/u/4809757/website-showreel/audio/music-showreel-2013.mp3', TYPE: 'audio/mpeg' }
                        ]
                    }
                ],
                VIDEOS: [
					{
						TITLE: 'Blue Islands TV advert',
                        PAGE_ANCHOR: '',
                        COPY: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
						FILES: [
							{ SRC: 'https://dl.dropboxusercontent.com/u/4809757/website-showreel/video/blue-islands.mp4', TYPE: 'video/mp4' }
						]
					},
					{
						TITLE: 'Emirates TV advert',
                        PAGE_ANCHOR: '',
						COPY: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
                        FILES: [
							{ SRC: 'https://dl.dropboxusercontent.com/u/4809757/website-showreel/video/emirates.mp4', TYPE: 'video/mp4' }
						]
					}
				]
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