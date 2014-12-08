// jshint ignore: start

'use strict';


angular.module('ngCart', [])

    .config([function () {

    }])

    .provider('$ngCart', function () {
        var shipping = false;
        var tax = false;
        this.$get = function () {};
    })

    .run(['$rootScope', 'ngCart','ngCartItem', 'store', function ($rootScope, ngCart, ngCartItem, store) {
        $rootScope.$on('ngCart:change', function(){
            ngCart.$save();
        });
        if (angular.isObject(store.get('cart'))) {
            ngCart.$restore(store.get('cart'));

        } else {
            ngCart.init();
        }
    }])

    .service('ngCart', ['$rootScope', 'ngCartItem', 'store', 'WEBSITE_SETTINGS', 'toastr', function ($rootScope, ngCartItem, store, WEBSITE_SETTINGS, toastr) {

        this.payPalProcessing = false;
        this.productType = WEBSITE_SETTINGS.SHOP.PRODUCT_TYPE;

        this.init = function() {
            this.$cart = {
                shipping : null,
                tax : null,
                items : []
            };
        };

        this.addItem = function (id, name, price, quantity, data) {
            var inCart = this.itemInCart(id);
            if (inCart !== false) {
                this.quantity(inCart.setQuantity(1, true));
            } else {
                var newItem = new ngCartItem(id, name, price, quantity, data);
                this.$cart.items.push(newItem);
            }
            toastr.success('Added ' + this.productType + ' to basket');
            $rootScope.$broadcast('ngCart:itemAdded', newItem);
            $rootScope.$broadcast('ngCart:change', {});
        };

        this.itemInCart = function (itemId) {
            var a = _.find(this.getCart().items, {_id:itemId}); // This should really call .getId() - not read the private property
            if (a === undefined) {
                return false;
            } else {
                return a;
            }
        };

        this.setShipping = function(shipping) {
            this.$cart.shipping = shipping;
        };

        this.getPayPalProcessing = function() {
            return this.payPalProcessing;
        };

        this.processPayPal = function() {
            this.payPalProcessing = true;
        };

        this.getShipping = function() {
            if (this.getCart().items.length === 0) {
                return 0;
            }
            return  this.getCart().shipping;
        };

        this.setTax = function(tax) {
            this.$cart.tax = tax;
        };

        this.getTax = function() {
            return ((this.getSubTotal()/100) * this.getCart().tax );
        };

        this.setCart = function (cart) {
            this.$cart = cart;
        };

        this.getCart = function() {
            return this.$cart;
        };

        this.getItems = function() {
            return this.getCart().items;
        };

        this.totalItems = function() {
            return this.getCart().items.length;
        };

        this.getSubTotal = function() {
            var total = 0;
            angular.forEach(this.getCart().items, function (item) {
                total += item.getTotal();
            });
            return total;
        };

        this.totalCost= function () {
            return this.getSubTotal() + this.getShipping() + this.getTax();
        };

        this.removeItem = function (index) {
            this.$cart.items.splice(index, 1);
            $rootScope.$broadcast('ngCart:itemRemoved', {});
            $rootScope.$broadcast('ngCart:change', {});
            toastr.info('Removed item from basket');
        };

        this.empty = function () {
            this.$cart.items = [];
            localStorage.removeItem('cart');
            toastr.info('Emptied basket');
        };

        this.$restore = function(storedCart) {
            var _self = this;
            _self.init();
            _self.$cart.shipping = storedCart.shipping;
            _self.$cart.tax = storedCart.tax;
            angular.forEach(storedCart.items, function (item) {
                _self.$cart.items.push(new ngCartItem(item._id,  item._name, item._price, item._quantity, item._data));
            });
            this.$save();
        };

        this.$save = function () {
            return store.set('cart', JSON.stringify(this.getCart()));
        };
    }])

    .factory('ngCartItem', ['$rootScope', 'store', 'toastr', function ($rootScope, store, toastr) {

        var item = function (id, name, price, quantity, data) {
            this.setId(id);
            this.setName(name);
            this.setPrice(price);
            this.setQuantity(quantity);
            this.setData(data);
        };

        item.prototype.setId = function(id){
            if (id) {
              this._id = id;
            } else {
                console.error('An ID must be provided');
                toastr.error('An ID must be provided');
            }
        };

        item.prototype.getId = function(){
            return this._id;
        };

        item.prototype.setName = function(name){
            if (name) {
                this._name = name;
            } else {
                console.error('A name must be provided');
                toastr.error('A name must be provided');
            }
        };

        item.prototype.getName = function(){
            return this._name;
        };

        item.prototype.setPrice = function(unformattedPrice){
            var price = parseFloat(unformattedPrice);
            if (price) {
                if (price <= 0) {
                    console.error('A price must be over 0');
                    toastr.error('A price must be over 0');
                }
                this._price = (price);
            } else {
                console.error('A price must be provided');
                toastr.error('A price must be provided');
            }
        };

        item.prototype.getPrice = function(){
            return this._price;
        };

        item.prototype.setQuantity = function(unformattedQuantity, relative){
            var quantity = parseInt(unformattedQuantity);
            if (quantity % 1 === 0) {
                if (relative === true) {
                    this._quantity  += quantity;
                } else {
                    this._quantity = quantity;
                }
                if (this._quantity < 1) {
                    this._quantity = 1;
                }
            } else {
                this._quantity = 1;
                console.info('Quantity must be an integer and was defaulted to 1');
                toastr.info('Quantity must be an integer and was defaulted to 1');
            }
            $rootScope.$broadcast('ngCart:change', {});
        };

        item.prototype.getQuantity = function() {
            return this._quantity;
        };

        item.prototype.setData = function(data) {
            if (data) {
                this._data = data;
            }
        };

        item.prototype.getData = function() {
            if (this._data) {
                return this._data;
            } else {
              console.info('This item has no data');
              console.error('This item has no data');
            }
        };

        item.prototype.getTotal = function() {
            return this.getQuantity() * this.getPrice();
        };

        return item;

    }])

    .service('store', ['$window', function($window) {
        return {
            get: function (key) {
                if ($window.localStorage [key]) {
                    var cart = angular.fromJson($window.localStorage [key]);
                    return JSON.parse(cart);
                }
                return false;

            },
            set: function (key, val) {
                if (val === undefined) {
                    $window.localStorage .removeItem(key);
                } else {
                    $window.localStorage [key] = angular.toJson(val);
                }
                return $window.localStorage [key];
            }
        };
    }])

    .controller('CartController',['$scope', 'ngCart', function($scope, ngCart) {
        $scope.ngCart = ngCart;
    }])

    .value('version', '0.0.1-rc.2');