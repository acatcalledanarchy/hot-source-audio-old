/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.factory('Client', Client);	

	function Client() {

		var clients = [
			{ name: '7up', image: '7up.png' },
			{ name: 'B&amp;Q', image: 'b-and-q.png' },
			{ name: 'British Airways', image: 'british-airways.png' },
			{ name: 'Castrol', image: 'castrol.png' },
			{ name: 'Emirates', image: 'emirates.png' },
			{ name: 'Lexus', image: 'lexus.png' },
			{ name: 'Lloyds TSB', image: 'lloyds-tsb.png' },
			{ name: 'Northern Trust', image: 'northern-trust.png' },
			{ name: 'SpecSavers', image: 'specsavers.png' },
			{ name: 'Time Out Dubai', image: 'time-out-dubai.png' },
			{ name: 'Transport for London', image: 'transport-for-london.png' },
			{ name: 'Virgin Atlantic', image: 'virgin-atlantic.png' }
		];
	
		var service =  {
			all: clients
		};

		return service;
	}

})();