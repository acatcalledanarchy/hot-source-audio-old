/* jshint latedef: false */
/* jshint camelcase: false */

(function() {

	'use strict';

	angular
		.module('app.shop')
		.directive('productForm', productForm);

	productForm.$inject = ['$filter', '$location', 'Product', 'Auth'];

	function productForm($filter, $location, Product, Auth) {

		var directive = {
			restrict: 'AE',
			replace: true,
			scope: {
				product: '=',
				productAction: '@',
				websiteSettings: '='
			},
			templateUrl: 'scripts/product/product-form.html',
			link: link
		};

		return directive;

		function link(scope) {
			scope.productFormSubmitted = false;
			scope.submitProductForm = function() {
				scope.productFormSubmitted = true;
				scope.$broadcast('show-errors-check-validity');
				if (scope.productForm.$valid) {
					scope.product.creator_uid = Auth.user.uid;
					scope.product.created_on = new Date().getTime();
					scope.product.quantity = parseInt(scope.product.quantity);
					scope.product.original_quantity = scope.product.quantity;
					console.log(scope);
					if (scope.productAction === 'edit') {
						Product.update(scope.product).then(function() {
							scope.productFormSubmitted = false;
					  	 	scope.$broadcast('show-errors-reset');
							$location.path('/' + scope.websiteSettings.SHOP.TITLE.toLowerCase());
						}, function() {
							scope.productFormSubmitted = false;
						});
					} else {
						Product.create(scope.product).then( function() {
							scope.productFormSubmitted = false;
							scope.$broadcast('show-errors-reset');
							scope.product = {};
						}, function() {
							scope.productFormSubmitted = false;
						});
					}
				} else {
					scope.productFormSubmitted = false;
				}
			};
		}
	}

})();