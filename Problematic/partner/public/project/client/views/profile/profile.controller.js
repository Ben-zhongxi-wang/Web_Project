angular
    .module("EstoreApp")
    .controller("ProfileController", ProfileController);

function ProfileController ($scope, $location, UserService, LikeService) {

    UserService.findUserByUsernameAndPassword("dongtj", "Dongtj2015", function(user){
        $scope.user = user;
    });

    LikeService.findLikeByUser("dongtj",function(likes){
        $scope.likes = likes;
    })

    $scope.deleteUser = function(){
        $location.path("/home");
    }

    $scope.editUser = function() {
        $location.path("/editUser");
    }

    $scope.enterBook = function(name){
        $location.path("/product");
    }
}
