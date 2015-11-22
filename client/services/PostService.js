(function(){
	angular
	.module("BlogApp")
	.factory("PostService",PostService);


	function PostService($rootScope,$q,$http){

		var service={
			createPost: createPost,
			findPostsAll: findPostsAll
		}

		return service;

		function findPostsAll(searchText){
			return $http.get("/api/project/post?searchText="+searchText);
		
			
		}

		function createPost(post){
			return $http.post("/api/project/post",post);
		}
	}


})();