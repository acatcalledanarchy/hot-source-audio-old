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
			restrict: 'E',
			replace: true,
			scope: {
				product: '=',
				shopTitleSlug: '@',
				productType: '@',
				productAction: '@',
				productQuantityLabel: '@',
				fontAwesomeIcon: '@'
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
					scope.product.creator = Auth.user.profile.username;
					scope.product.creatorUID = Auth.user.uid;
					scope.product.created_on = new Date().getTime();	
					if (scope.productAction === 'edit') {
						Product.update(scope.product).then(function() {
							scope.productFormSubmitted = false;
					  	 	scope.$broadcast('show-errors-reset');
							$location.path('/' + scope.shopTitleSlug);
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