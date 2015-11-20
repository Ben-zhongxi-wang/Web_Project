(function(){
	angular
		.module("FormBuilderApp")
		.config(Config)
	var path = "./views/"
	
	function Config ($routeProvider) 
	{
		$routeProvider
			.when('/home', {
				templateUrl: path + 'home/home.view.html',
			})
			.when('/register', {
				templateUrl: path + 'register/register.view.html',
				controller: 'RegisterController'
			})
			.when('/login', {
				templateUrl: path + 'login/login.view.html',
				controller: 'LoginController'

			})
			.when('/profile', {
				templateUrl: path + 'profile/profile.view.html',
				controller:'ProfileController',
			})
			.when('/admin', {
				templateUrl: path + 'admin/admin.view.html',
				controller:'AdminController',
			})
			.when('/forms', {
				templateUrl: path + 'form/form.view.html',
				controller:'FormController',
			})
			.when('/user/:userId/form/:formId/fields', {
				templateUrl: path + 'field/field.view.html',
				controller:'FieldController',
			})
			.otherwise({
				redirectTo:'/home'
			})
			
	}
})();
