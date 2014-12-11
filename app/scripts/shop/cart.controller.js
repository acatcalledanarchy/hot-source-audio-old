/*jshint latedef: false*/

(function() {

	'use strict';

	angular
		.module('app.shop')
		.controller('CartController', CartController);

	CartController.$inject = ['$scope', 'ngCart'];

	function CartController($scope, ngCart) {

		$scope.ngCart = ngCart;
	}

})();