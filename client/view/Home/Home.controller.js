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
	// console.log($location.search().user);
	var userId=$location.search().user;
	var tag=$location.search().tag;

	if (userId) {
		PostService.findPostsByUserId($location.search().user)
				.then(function (res) {
					$scope.posts = res.data;
					//console.log($scope.posts);
				});
	}

	else if (tag){
		console.log(tag);
		PostService.findPostsByTag($location.search().tag)
				.then(function(res){
					$scope.posts=res.data;
				});
	}

	else{

		PostService.findPostsAll($location.search().searchText)
				.then(function (res) {
					$scope.posts = res.data;
					//$rootScope.posts=$scope.posts;
				});

	}
}
