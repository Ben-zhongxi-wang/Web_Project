/**
 * Created by Tianjie Dong on 2015/11/1.
 */
(function(){
    angular
        .module("EstoreApp")
        .factory("CommentService", CommentService)

    function CommentService(){
        var comments = [
            {
                username: "dongtj",
                bookname: "Harry Potter1",
                comment: "this is suck"
            },
            {
                username: "john",
                bookname: "Harry Potter1",
                comment: "fantastic"
            },
            {
                username: "Jose",
                bookname: "Harry Potter1",
                comment: "interesting book"
            },
        ]
        var CommentService = {}

        CommentService.findCommentByBookName = function(bookname, callback) {
            commentsInBook = [];
            for (var i = 0; i < comments.length; i++) {
                var comment = comments[i];
                if (comment.bookname === bookname) {
                    commentsInBook.push(comment);
                }
            }
            callback(JSON.parse(JSON.stringify(commentsInBook)));
        }

        return CommentService;
    }
})();