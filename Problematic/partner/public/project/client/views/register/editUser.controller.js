angular
	.module("EstoreApp")
	.controller("EditUserController", EditUserController);

function EditUserController ($scope,$location, UserService) {
	UserService.findUserByUsernameAndPassword("dongtj", "Dongtj2015", function(user){
		var phones = user.phone.split("-");
		$scope.user = user;
		$scope.phone1 = phones[0];
		$scope.phone2 = phones[1];
		$scope.phone3 = phones[2];
	})
};
