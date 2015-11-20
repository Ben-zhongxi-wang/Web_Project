(function(){ 
	  angular
		.module("FormBuilderApp")
		.factory("UserService", UserService)
		
	function UserService($http, $q){
		var userService = {
			findAllUsers: FindAllUsers,
			findUserByUsernameAndPassword: FindUserByUsernameAndPassword,
			createUser: CreateUser,
			deleteUserById: DeleteUserById,
			updateUser: UpdateUser
		}
		return userService;

		function FindUserByUsernameAndPassword(username, password){
			var deferred = $q.defer();
			$http.get("/api/assignment/user?username="+ username +"&password=" + password)
				.success(function(res){
					deferred.resolve(res);
				});
			return deferred.promise;
		}

		function FindAllUsers(){
			var deferred = $q.defer();
			$http.get("/api/assignment/user")
				.success(function(res){
					deferred.resolve(res);
				});
			return deferred.promise;
		}
		
		function CreateUser(user){
			console.log(user);
			var deferred = $q.defer();
			$http.post("/api/assignment/user",user)
				.success(function(res){
					deferred.resolve(res);
				});
			return deferred.promise;
		}
		
		function DeleteUserById(id){
			var deferred = $q.defer();
			$http.delete("/api/assignment/user/"+id)
				.success(function(res){
					deferred.resolve(res);
				});
			return deferred.promise;
		}
		
		function UpdateUser(id, user, callback){
			var deferred = $q.defer();
			$http.put("/api/assignment/user/"+id, user)
				.success(function(res){
					deferred.resolve(res);
				});
			return deferred.promise
		}

	}
})();