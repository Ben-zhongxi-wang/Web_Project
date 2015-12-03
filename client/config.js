(function(){
  angular
    .module("BlogApp")
    .config(Configuration)


    function Configuration($routeProvider,$sceProvider,$locationProvider)
    {
      $routeProvider
        .when('/home',{
          templateUrl: './view/Home/Home.view.html'
        })
        .when('/add',{
          templateUrl: './view/Upload/Upload.view.html'
        })
        .when('/editor/:id',{
          templateUrl: './view/Editor/Editor.view.html'
        })
          .when('/upload',{
            templateUrl: './view/Upload/Upload.view.html'
          })
        .when('/contact',{
          templateUrl: './view/Contact/Contact.view.html'
        })
          .when('/login',{
            templateUrl:'./view/Login/Login.view.html'
          })
        .when('/registration',{
          templateUrl: './view/Registration/Registration.view.html'
        })
        .when('/individual/:id',{
          templateUrl: './view/Individual/Individual.view.html'
        })
        .otherwise({
            redirectTo:'/home'
        });

      $sceProvider.enabled(false);
      $locationProvider.html5Mode(true);



    }
})();
