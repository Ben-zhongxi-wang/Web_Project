(function(){
	  angular
		.module("BlogApp")
		.controller("editorController", editorController);
})();


function editorController($scope,$rootScope,$location,$routeParams,PostService,UserService){

	var postId=$routeParams.id;

	//console.log(postId);

	if (postId) {
		PostService.findPostById(postId)
				.then(function (res) {
					$scope.post = res.data;
					//console.log($scope.post);
				});
	};



	$scope.submitPost=function(){
		PostService.updatePostById(postId,$scope.post)
		.then(function(){
			$location.path("/home");
		})
	}
}