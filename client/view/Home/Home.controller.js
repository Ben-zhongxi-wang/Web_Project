(function(){
	  angular
		.module("BlogApp")
		.controller("homeController", homeController);
})();


/*function homeController($scope,$rootScope,PostService){
	var model=this;
	model.posts=PostService.findPostsAll();

}*/


function homeController($scope,$rootScope,$location,PostService){
	console.log($location.search().searchText);
	$rootScope.currentPost='undefined';
	PostService.findPostsAll($location.search().searchText)
		.then(function(res){
			$scope.posts=res.data;
			$rootScope.posts=$scope.posts;
		})


}
