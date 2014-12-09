/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app.my-account')
		.controller('CalendarCtrl', CalendarCtrl);

	CalendarCtrl.$inject = ['$scope', 'Product', '$modal', 'moment'];

	function CalendarCtrl($scope, Product, $modal, moment) {

		var vm = this;
		vm.eventSources = [];
		vm.products = Product.all;

		/*
		vm.products.$loaded().then(function(products) {
			for(var i = 0; i < products.length; i++ ) {
				//var product = products[i];
				
				var startTime = new Date(y, m, d - 5);
				var endTime = new Date(y, m, d - 2);

				var eventSource = {
					title: name,
					start: startTime,
					end: endTime
				};
				vm.eventSources.push(eventSource);
			}
		});
		*/

	var currentYear = moment().year();
    var currentMonth = moment().month();

    $scope.events = [
      {
        title: 'Event 1',
        type: 'warning',
        starts_at: new Date(currentYear,currentMonth,25,8,30),
        ends_at: new Date(currentYear,currentMonth,25,9,30)
      },
      {
        title: 'Event 2',
        type: 'info',
        starts_at: new Date(currentYear,currentMonth,19,7,30),
        ends_at: new Date(currentYear,currentMonth,25,9,30)
      },
      {
        title: 'This is a really long event title',
        type: 'important',
        starts_at: new Date(currentYear,currentMonth,25,6,30),
        ends_at: new Date(currentYear,currentMonth,25,6,60)
      },
    ];

    $scope.calendarView = 'month';
    $scope.calendarDay = new Date();

    function showModal(action, event) {
      $modal.open({
        templateUrl: 'modalContent.html',
        controller: function($scope, $modalInstance) {
          $scope.$modalInstance = $modalInstance;
          $scope.action = action;
          $scope.event = event;
        }
      });
    }

    $scope.eventClicked = function(event) {
      showModal('Clicked', event);
    };

    $scope.eventEdited = function(event) {
      showModal('Edited', event);
    };

    $scope.eventDeleted = function(event) {
      showModal('Deleted', event);
    };

    $scope.setCalendarToToday = function() {
      $scope.calendarDay = new Date();
    };

    $scope.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();

      event[field] = !event[field];
    };

	}		

})();