/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('CalendarCtrl', CalendarCtrl);

	CalendarCtrl.$inject = ['Product', '$modal', 'moment', 'WEBSITE_SETTINGS'];

	function CalendarCtrl(Product, $modal, moment, WEBSITE_SETTINGS) {

		var vm = this;
		vm.events = [];
		vm.calendarView = 'month';
	    vm.calendarDay = new Date();
	    vm.getEvents = getEvents;
		vm.products = Product.all;
		vm.shopTitle = WEBSITE_SETTINGS.SHOP.TITLE;
	    	
	    activate();

	    function activate() {
	    	return vm.getEvents();
	    }

	    function getEvents() {
	    	vm.products.$loaded().then(function(products) {
				for(var i = 0; i < products.length; i++ ) {
					var product = products[i],
						title = product.name,
						thisEvent = {
							title: title,
							type: 'info',
							starts_at: moment(new Date(product.date.replace( /(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3') + ' : ' + product.startTime)),
							ends_at: moment(new Date(product.date.replace( /(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3') + ' : ' + product.endTime))
						};

					vm.events.push(thisEvent);
				}

				return vm.events;
			});
	    }
		
	    function showModal(action, event) {
			$modal.open({
				templateUrl: 'modalContent.html',
				controller: function($scope, $modalInstance) { /* <!-- Weird this works although we haven't injected $scope or $modalInstance for that matter? */
					$scope.$modalInstance = $modalInstance;
					$scope.action = action;
					$scope.event = event;
				}
			});
	    }

	    vm.eventClicked = function(event) {
			showModal('Clicked', event);
	    };

	    vm.eventEdited = function(event) {
			showModal('Edited', event);
	    };

	    vm.eventDeleted = function(event) {
			showModal('Deleted', event);
	    };

	    vm.setCalendarToToday = function() {
			vm.calendarDay = new Date();
	    };

	    vm.toggle = function($event, field, event) {
			$event.preventDefault();
			$event.stopPropagation();
			event[field] = !event[field];
	    };
	}		

})();