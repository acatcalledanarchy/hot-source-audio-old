/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app')
		.factory('Employee', Employee);

	function Employee() {

		var employees = [
			{ first_name: 'Simon', surname: 'Prince', email_address: 'simon@hotsourceaudio.com', image: 'simon.jpg', telephone_number: '+44 (0) 1481 711111', copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
			{ first_name: 'Mark', surname: 'Adnitt', email_address: 'mark@hotsourceaudio.com', image: 'mark.jpg', telephone_number: '+44  (0) 1481 711112', copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
			{ first_name: 'Nick', surname: 'Windsor', email_address: 'nick@hotsourceaudio.com', image: 'nick.jpg', telephone_number: '+4 (0) 1481 711113', copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
		];

		var factory = {
			all: employees
		};

		return factory;
	}

})();