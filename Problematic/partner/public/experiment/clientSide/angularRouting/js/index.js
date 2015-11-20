(function(){
	angular
		.module("AssignmentApp", ["ngRoute"])
		.config(Config)
		.controller("IndexController", IndexController)
	var path = "angularRouting"
	
	function Config ($routeProvider) 
	{
		$routeProvider
			.when('/home', {
				templateUrl: path + '/home.html',
			})
			.when('/register', {
				templateUrl: path + '/register.html',
				controller: 'RegisterController'
			})
			.when('/login', {
				templateUrl: path + '/login.html',
				controller: 'LoginController'

			})
			.when('/profile', {
				templateUrl: path + '/profile.html',
				controller:'ProfileController',
			})
			.when('/admin', {
				templateUrl: path + '/admin.html',
				controller:'AdminController',
			})
			.when('/forms', {
				templateUrl: path + '/forms.html',
				controller:'FormsController',
			})
			.when('/form-fields', {
				templateUrl: path + '/form-fields.html',
				controller:'FormFieldsController',
			})
			.otherwise({
				redirectTo:'/home'
			})
			
	}
	function IndexController($location){
		console.log("I got here");
		$location.url("/home");
	}
})();
