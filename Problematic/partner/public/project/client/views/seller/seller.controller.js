angular
    .module("EstoreApp")
    .controller("SellerController", SellerController);

function SellerController ($scope, $location, UserService, BookService) {

    UserService.findUserByUsernameAndPassword("dongtj", "Dongtj2015", function(user){
        $scope.user = user;
    });

    BookService.findBooksBySeller("dongtj", function(books){
        $scope.books = books;
    })

    $scope.deleteUser = function(){
        $location.path("/home");
    };

    $scope.editUser = function() {
        $location.path("/editUser");
    };

    $scope.enterBook = function(name){
        $location.path("/product");
    }
}
