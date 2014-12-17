/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app.shop')
		.controller('ShopCtrl', ShopCtrl);

	ShopCtrl.$inject = ['$scope', '$compile', 'moment', 'user', 'Auth', 'Product', 'ngCart', 'WEBSITE_SETTINGS'];

	function ShopCtrl($scope, $compile, moment, user, Auth, Product, ngCart, WEBSITE_SETTINGS) {

		var vm = this;
		vm.deleteProduct = deleteProduct;
		vm.deletingProduct = false;
		vm.events = [];
		vm.eventSources = [vm.events];
		vm.eventRender = eventRender;
		vm.getEvents = getEvents;
		vm.products = Product.all;
		vm.signedIn = Auth.signedIn;
		vm.user = user;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;

	    /* config object */
	    vm.uiConfig = {
	      calendar:{
	        editable: false,
	        header:{
	          left: 'prev,today,next',
	          center: 'title',
	          right: 'agendaDay,agendaWeek,month' 
	        },
	        defaultView: 'agendaWeek',
	        eventClick: $scope.alertOnEventClick,
	        eventDrop: $scope.alertOnDrop,
	        eventResize: $scope.alertOnResize,
	        eventRender: vm.eventRender
	      }
	    };

		activate();

	    function activate() {
	    	return vm.getEvents();
	    }
		
		function deleteProduct(product) {
			vm.deletingProduct = true;
			Product.delete(product).then(function() {
				vm.deletingProduct = false;
			});
		}

	    function eventRender(event, element) { 
	        element.attr({'tooltip': event.description,
	                     'tooltip-append-to-body': true});
	        $compile(element)($scope);
	    }
		
		function getEvents() {
	    	vm.products.$loaded().then(function(products) {
				for(var i = 0; i < products.length; i++) {
					var product = products[i],
						title = product.name,
						day = product.date.replace( /(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'),
						data = {
							title: title,
							start: new Date(day + ' ' + products[i].start_time),
							end: new Date(day + ' ' + products[i].end_time),
							allDay: false,
							description: product.description + 'Click to view',
							url: '/#/' + vm.WEBSITE_SETTINGS.SHOP.TITLE.toLowerCase() + '/' + product.$id
						};

					vm.events.push(data);
				}

				vm.eventSources = [{ color: '#f00',
   									 textColor: 'yellow',
   									 events: vm.events }];

				return vm.eventSources;
			});
		}
	}

})();