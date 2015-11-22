(function(){
	  angular
		.module("BlogApp")
		.controller("uploadController", uploadController);
})();


function uploadController($scope,$rootScope,$location,userService){
	$scope.submitPost=function(){
		return userService.createPost($scope.post)
		.then(function(){
			$location.path("/home");
		})
	}
}