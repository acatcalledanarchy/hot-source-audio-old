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
                    BANNER: 'home.jpg', 
                    INTRO_COPY: '<p>Hot Source Source is an independent audio production company based in Guernsey in the Channel Islands. ' +
                                'We write words, music and sound design for radio and tv advertising, online video, film and digital media.</p>' +
                                '<p>We craft audio that connects and engages brands with people.</p>',
                    HOW_WE_WORK_COPY: '<p>Clearly we have sense of humour but we do take the business of producing creative audio seriously.</p>' +
                                '<p>So, simply put....</p>' +
                                '<p>If you’re a radio station sales manager we can arm your team with creative variety in commercial script writing, campaign ideas, music and production.</p>' +
                                '<p>If you’re an advertising agency we can work alongside your creative team, take direction, advise and help bring their ideas to life across traditional and digital mediums.</p>' +
                                '<p>If you’re a client direct we can design creative audio that can enhance your business from the tone of voice and music on your on hold messages to your online video blogs... ...spanning across radio and tv advertsing in between.</p>' +
                                '<p>If you’re a film producer or videographer...we can write music you can feel with sound design you can see.</p>',
                    SERVICES: [
                        {
                            TITLE: 'Radio advertising',
                            IMAGE: 'studio.jpg',
                            COPY: '<p>Radio Commercial Production including scriptwriting - voice-over casting & recording – music selection/composition</p>',
                            LINK: {
                                PAGE_ANCHOR: 'radio-commericals-showreel',
                                TEXT: 'Listen to showreel'
                            }
                        },
                        {
                            TITLE: 'Audio branding',
                            IMAGE: 'music-composition.jpg',
                            COPY: '<p>Sound design, bespoke music and sonic logos, voice over selection and recording across radio, tv, film and digital content.</p>'
                        },
                        {
                            TITLE: 'Film, TV & digital',
                            IMAGE: 'amp.jpg',
                            COPY: '<p>Bespoke music composition, sound design, recording and production for Film documentary, advertising, web video, podcasts and audio books.</p>',
                            LINK: {
                                PAGE_ANCHOR: 'music-showreel',
                                TEXT: 'Listen to showreel'
                            }
                        },
                        {
                            TITLE: 'Library',
                            IMAGE: 'audio-restoration.jpg',
                            COPY: '<p>The Hot Source music library offers music in many styles which can be customised for exclusive use for production companies.</p>'
                        }
                    ]
                },
                STUDIO: {
                    META: {
                        DESCRIPTION: 'Our studios are situated in the former WW2 German Naval Command Communications Bunker built during the 1940/45 occupation. Code named Seeko-Ki it housed one of the legendary enigma coding machines.',
                        KEYWORDS: 'studio, ww2, german, naval, command, seeko-ki, isdn, real-time, audio, drum, vocal, booth, live, guitar, room, enigma, coding, machine'
                    },
                    BANNER: 'studio.jpg',
                    INTRO_COPY: '<p>Hot Source studios are situated in the former WW2 German Naval Command Communications Bunker built during the 1940/45 occupation. ' +
                    'Code named Seeko-Ki it housed one of the legendary enigma coding machines.</p>' +
                    '<p>The Germans were here 5 years... we’ve been here much longer.</p>' +
                    '<p>Other than the two most essential pieces of kit (our ears and imagination) we have all the industry leading hardware and software at hand to create music and sound to bring your audio to life.</p>' +
                    '<p>Via ISDN, Ipdtl, source connect we can link with studios for real-time audio connections across the globe making voice talent available to any producers working at our facilities.</p>'
                },
                ABOUT_US: {
                    META: {
                        DESCRIPTION: '',
                        KEYWORDS: ''
                    },
                    BANNER: 'about-us.jpg',
                    INTRO_COPY: '<p>Originally set up as Evolution Studios in 1992 most of the 90s saw founder Mark Adnitt collaborating with Nick Windsor on many campaigns for KWL (the agency Nick was a partner in at the time). ' +
                    'At this time Mark also wrote and produced commercials for other local and uk radio stations and agencies ...particularly specialising in bespoke music for tv commercials for UK agencies.</p>' +
                    '<p>Together they were responsible for the production for radio commercials and bespoke music that featured on local and national radio and tv stations and as far as Sydney.</p>' +
                    '<p>On the formation of Hot Source and with the addition of Simon Prince they have since worked with UK agencies, radio stations and film companies writing words and music for notable brands including Emirates Airlines, Castrol GTX, 7-Up, Sea France, Specsavers International, British Airways, Fred Olsen and Orient Express.</p>'
                },
                OUR_WORK: {
                    META: {
                        DESCRIPTION: '',
                        KEYWORDS: ''
                    },
                    BANNER: 'our-work.jpg',
                    INTRO_COPY: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + 
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
                },
                CONTACT_US: {
                    META: {
                        DESCRIPTION: '',
                        KEYWORDS: ''
                    },
                    BANNER: 'contact-us.jpg',
                    INTRO_COPY: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' + 
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
                },
                ERROR: {
                    META: {
                        DESCRIPTION: '',
                        KEYWORDS: ''
                    },
                    BANNER: 'error.jpg',
                    PAGE_COPY: '<p>Computer says "no" - this page cannot be found.</p>'
                }
            },
            EMPLOYEES: [
                {
                    FIRST_NAME: 'Mark',
                    SURNAME: 'Adnitt',
                    JOB_TITLE: 'Founding Partner – script writer/music composition/production',
                    EMAIL_ADDRESS: 'mark@hotsourceaudio.com',
                    IMAGE: 'mark.jpg',
                    TELEPHONE_NUMBER: '+44  (0) 1481 711112',
                    COPY: '<p>Mark moved to Guernsey in 1984 from London where he was a singer and producer working with bands in studios such as CTS and EMI Studios.</p>' +
                    '<p>This experience was the stepping stone to a full-time career in commercial audio production that saw the birth of Evolution Studios in the early 90s.</p>' +
                    '<p>Since then he has acquired over 20 years’ experience in writing and producing scripts for radio, and bespoke music for tv. His work has traversed the globe on local and national radio and tv stations as well as digital.</p>' +
                    '<p>Throughout his career his sense of humour has been translated into many hundreds of radio commercials, music branding projects and advertising campaigns.</p>' +
                    '<p>Clients value his experience, amiable character and his ability to catch many lobsters each summer. Ask him from where though and expect a stony silence.</p>'
                },
                {
                    FIRST_NAME: 'Nick',
                    SURNAME: 'Windsor',
                    JOB_TITLE: 'Founding Partner – script writer/music composition/production',
                    EMAIL_ADDRESS: 'nick@hotsourceaudio.com',
                    IMAGE: 'nick.jpg',
                    TELEPHONE_NUMBER: '+4 (0) 1481 711113',
                    COPY: '<p>Nick brings a wealth of music composition and recording experience both as a session guitarist and writer.</p>' +
                    '<p>He has played in semi-pro bands on big stages since he was 16, supporting the likes of Thin Lizzy, Sister Sledge and Big Country as well as playing guitar appearing alongside his pals in many other top local bands on stage and in the studio.</p>' +
                    '<p>He has also toured with Paul Young, recorded with The Christians and performed at Ronnie Scotts.</p>' +
                    '<p>Backed by years of experience marketing and advertising has enabled him to bring these skills to the fore when devising campaigns for radio advertising, tv soundtracks and bespoke music.</p>' +
                    '<p>The need for a creative synergy between mediums and messages is a challenge he enjoys and one reason he is respected by fellow creatives and clients as a great sounding board for the bigger marketing picture.</p>'
                },
                {
                    FIRST_NAME: 'Simon',
                    SURNAME: 'Prince',
                    JOB_TITLE: 'Producer/composer/sound designer',
                    EMAIL_ADDRESS: 'simon@hotsourceaudio.com',
                    IMAGE: 'simon.jpg',
                    TELEPHONE_NUMBER: '+44 (0) 1481 711111',
                    COPY: '<p>A stickler for timing Simon is highly respected as a drummer/percussionist and composer.</p>' +
                    '<p>He attended Leeds College of Music where he earned a Diploma in studio engineering & Music Technology.</p>' +
                    '<p>Since joining Hot Source he has been able to stretch his wings in engineering and production, bringing to life Hot Source and agency scripts with an unbridalled passion for sound design.</p>' +
                    '<p>He has cast thousands of voices for commercials on radio, tv as well as digital content.</p>' +
                    '<p>As a composer...his work has been heard on high profile companies both locally and globally.</p>'
                }
            ],
            SHOWREEL: {
                MP3S: [
                    {
                        TITLE: 'Radio commercials showreel',
                        PAGE_ANCHOR: 'radio-commericals-showreel',
                        COPY: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
                        FILES: [
                            {
                                SRC: 'https://dl.dropboxusercontent.com/u/4809757/website-showreel/audio/ad-showreel-2013.mp3',
                                TYPE: 'audio/mpeg'
                            }
                        ]
                    },
                    {
                        TITLE: 'Music showreel',
                        PAGE_ANCHOR: 'music-showreel',
                        COPY: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
                        FILES: [
                            {
                                SRC: 'https://dl.dropboxusercontent.com/u/4809757/website-showreel/audio/music-showreel-2013.mp3',
                                TYPE: 'audio/mpeg'
                            }
                        ]
                    }
                ],
                VIDEOS: [
					{
						TITLE: 'Blue Islands Airline',
                        COPY: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
						FILES: [
							{
                                SRC: 'https://dl.dropboxusercontent.com/u/4809757/website-showreel/video/69287439.mp4',
                                TYPE: 'video/mp4'
                            }
						]
					},
					{
						TITLE: 'Emirates Airline',
                        COPY: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
                        FILES: [
							{
                                SRC: 'https://dl.dropboxusercontent.com/u/4809757/website-showreel/video/emirates.mp4',
                                TYPE: 'video/mp4'
                            }
						]
					},
                    {
                        TITLE: 'Conquer the Castle',
                        FILES: [
                            {
                                SRC: 'https://dl.dropboxusercontent.com/u/4809757/website-showreel/video/Manon_Carpenter_CTC.mp4',
                                TYPE: 'video/mp4'
                            }
                        ]
                    },
                    {
                        TITLE: 'States of Guernsey',
                        FILES: [
                            {
                                SRC: 'https://dl.dropboxusercontent.com/u/4809757/website-showreel/video/Drivers_of_change_Public-1.mp4',
                                TYPE: 'video/mp4'
                            }
                        ]
                    }
				]
            },
            CLIENTS: [
                {
                    NAME: '7up',
                    IMAGE: '7up.png'
                },
                {
                    NAME: 'B&amp;Q',
                    IMAGE: 'b-and-q.png'
                },
                {
                    NAME: 'British Airways',
                    IMAGE: 'british-airways.png'
                },
                {
                    NAME: 'Castrol', 
                    IMAGE: 'castrol.png' 
                },
                {
                    NAME: 'Emirates',
                    IMAGE: 'emirates.png'
                },
                {
                    NAME: 'Lexus',
                    IMAGE: 'lexus.png'
                },
                {
                    NAME: 'Lloyds TSB',
                    IMAGE: 'lloyds-tsb.png'
                },
                {
                    NAME: 'Northern Trust',
                    IMAGE: 'northern-trust.png'
                },
                {
                    NAME: 'SpecSavers',
                    IMAGE: 'specsavers.png'
                },
                {
                    NAME: 'Time Out Dubai',
                    IMAGE: 'time-out-dubai.png'
                },
                {
                    NAME: 'Transport for London',
                    IMAGE: 'transport-for-london.png'
                },
                {
                    NAME: 'Virgin Atlantic',
                    IMAGE: 'virgin-atlantic.png'
                }
            ]
        };

    angular
        .module('app.core')
        .constant('WEBSITE_SETTINGS', WEBSITE_SETTINGS);
})();