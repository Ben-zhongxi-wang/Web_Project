angular
    .module("EstoreApp")
    .config(Config);

    function Config ($routeProvider) {
     $routeProvider
		.when('/home', {
            templateUrl: 'views/home/home.view.html'
         })
        .when('/search', {
            templateUrl: 'views/search/search.view.html',
			controller: 'SearchController'
        })
        .when('/login', {
            templateUrl: 'views/login/login.view.html',
            controller: 'LoginController'
        })
		.when('/reg', {
            templateUrl: 'views/register/register.view.html',
            controller: 'RegisterController'
        })
         .when('/shoppingcart', {
             templateUrl: 'views/shopppingCart/shoppingcart.view.html',
             controller:'ShoppingCartController'
         })
         .when('/shoppingrecord', {
             templateUrl: 'views/shopppingRecord/shoppingrecord.view.html',
             controller:'ShoppingRecordController'
         })
         .when('/product', {
             templateUrl: 'views/product/product.view.html',
             controller:'ProductController'
         })
         .when('/profile', {
             templateUrl: 'views/profile/profile.view.html',
             controller:'ProfileController',
         })
         .when('/editUser', {
             templateUrl: 'views/register/register.view.html',
             controller: 'EditUserController',
         })
         .when('/seller', {
             templateUrl: 'views/seller/seller.view.html',
             controller: 'SellerController',
         })

         /*
		.when('/second', {
            templateUrl: 'views/second.html',
            controller: 'SecondController'
        })
		.when('/addproduct', {
            templateUrl: 'views/addproduct.html',
			controller:'AddProductController'
		})
		.when('/editproduct', {
            templateUrl: 'views/editproduct.html',
			controller:'EditProductController'
		})
		.when('/buy', {
            templateUrl: 'views/buy.html',
			controller:'BuyController'
		})
		*/
        .otherwise({
             redirectTo: '/home'
         });
    }