(function(){
	  angular
		.module("BlogApp")
		.controller("navigationController", navigationController);
})();


function navigationController($http,$rootScope,$scope,$location){
		$scope.currentUser=$rootScope.currentUser;
		$scope.searching=function(){
			$location.path("/home").search('searchText',$scope.searchText);
		}
}
