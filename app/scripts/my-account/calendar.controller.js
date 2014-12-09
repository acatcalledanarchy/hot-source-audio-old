/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('CalendarCtrl', CalendarCtrl);

	CalendarCtrl.$inject = ['Product', '$modal', 'moment'];

	function CalendarCtrl(Product, $modal, moment) {

		var vm = this;
		vm.events = [];
		vm.products = Product.all;
		vm.products.$loaded().then(function(products) {
			for(var i = 0; i < products.length; i++ ) {
				var product = products[i],
					title = product.name,
					thisEvent = {
						title: title,
						type: 'info',
						starts_at: moment(products[i].date + ' : ' + products[i].startTime),
						ends_at: moment(products[i].date + ' : ' + products[i].endTime)
					};

				vm.events.push(thisEvent);
			}
		});

	    vm.calendarView = 'month';
	    vm.calendarDay = new Date();

	    function showModal(action, event) {
			$modal.open({
				templateUrl: 'modalContent.html', //!XXX This may be a quick win?
				controller: function(vm, $modalInstance) {
					vm.$modalInstance = $modalInstance;
					vm.action = action;
					vm.event = event;
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