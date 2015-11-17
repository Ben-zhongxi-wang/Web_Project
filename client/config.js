(function(){
  angular
    .module("BlogApp")
    .config(Configuration)


    function Configuration($routeProvider)
    {
      $routeProvider
        .when('/home',{
          templateUrl: './view/Home/Home.view.html'
        })
        .when('/upload',{
          templateUrl: './view/Upload/Upload.view.html'
        })
        .when('/contact',{
          templateUrl: './view/Contact/Contact.view.html'
        })
        .when('/individual',{
          templateUrl: './view/Individual/Individual.html'
        })
        .otherwise({
            redirectTo:'/home'
        })
    }
})();
