angular
    .module("EstoreApp")
    .controller("ProductController", ProductController);

function ProductController ($scope,$location, BookService, CommentService) {
    BookService.findBookByISBN("fafda-afafas-twrw-trtw", function(book){
        console.log(book);
        $scope.book = book;
    })

    CommentService.findCommentByBookName("Harry Potter1", function(comments){
        $scope.comments = comments;
    })
}
