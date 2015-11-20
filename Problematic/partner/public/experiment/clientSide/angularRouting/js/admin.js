
(function(){ 
	  angular
		.module("AssignmentApp")
		.controller("AdminController", AdminController);

	function AdminController($scope){
		
		var users = [
			{ username: "alice", roles: "student" },
			{ username: "bob", roles: "faculty | admin"},
			{ username: "charlie"}
		]
		
		$scope.addUser = addUser;
		$scope.removeUser = removeUser;
		$scope.selectUser = selectUser;
		$scope.updateUser = updateUser;
		
		$scope.users = users;

		function addUser(user){
			var newUser = {
				username: user.username,
				password: user.password,
				roles: user.roles
			}
			users.push(newUser);
		}

		function removeUser(user)
		{
			var index = $scope.users.indexOf(user);
			$scope.users.splice(index, 1);
		}

		function updateUser(user)
		{

		}

		function selectUser(user)
		{

		}
	}
})();


