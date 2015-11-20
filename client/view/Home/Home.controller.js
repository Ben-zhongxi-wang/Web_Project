(function(){
	  angular
		.module("BlogApp")
		.controller("homeController", homeController);
})();


function homeController($scope,$rootScope,postService){
	var model=this;
	model.posts=postService.findPostsAll();

}


