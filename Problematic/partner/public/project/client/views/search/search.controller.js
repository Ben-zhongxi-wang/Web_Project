angular
    .module("EstoreApp")
    .controller("SearchController", SearchController);

function SearchController ($scope,$location, BookService) {
     BookService.findAllBooks(function(books){
         $scope.books = books;
    })

    $scope.enterBook = function(name){
        $location.path("/product");
    }

    $scope.likeBook = function(book){
        $location.path("/profile");
    }

    $scope.buyBook = function(book){
        $location.path("/shoppingcart");
    }
}
	