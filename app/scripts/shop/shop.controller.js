/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app.shop')
		.controller('ShopCtrl', ShopCtrl);

	ShopCtrl.$inject = ['$scope', '$compile', 'products', 'eventSources', 'moment', 'user', 'Product', 'WEBSITE_SETTINGS'];

	function ShopCtrl($scope, $compile, products, eventSources, moment, user, Product, WEBSITE_SETTINGS) {

		var vm = this;
		vm.deleteProduct = deleteProduct;
		vm.deletingProduct = false;
		vm.events = [];
		vm.eventSources = eventSources;
		vm.eventRender = eventRender;
		vm.products = products;
		vm.user = user;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	    vm.uiConfig = {
			calendar:{
				columnFormat: {
					month: 'dddd',
					week: 'ddd d/M',
					day: 'dddd'
				},
				defaultView: 'agendaWeek',
				editable: false,
				header: {
					left: 'prev,today,next',
					center: 'title',
					right: 'agendaDay,agendaWeek,month' 	
				},
				//eventClick: $scope.alertOnEventClick,
				eventRender: vm.eventRender,
				titleFormat: {
					month: 'MMMM yyyy',
					week: 'd[ yyyy]{ \'&#8212;\'[ MMM] d MMMM, yyyy}',
					day: 'dddd, d MMMM, yyyy'
				}
			}
	    };

		///////////////////////////////////////////////////////////////
		
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
	}

})();