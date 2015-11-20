/**
 * Created by Tianjie Dong on 2015/11/1.
 */
(function(){
    angular
        .module("EstoreApp")
        .factory("LikeService", LikeService)

    function LikeService(){
        var likes = [
            {
                isbn:"fadfasv-afafas-fdafasdf-vadvsaa",
                username: "dongtj",
                bookname: "Harry Potter1",
                bookimage:"img\\default\\book1.png",
                description: "this is a great book"
            },
            {
                isbn:"jgksgr-fehlaf-fjald-fjflak",
                username: "dongtj",
                bookname: "Animal World",
                bookimage:"img\\default\\book2.png",
                description: "book is suck"
            },
            {
                isbn:"fdada-zxsafd-fdfd-fda",
                username: "dongtj",
                bookname: "Game Of Throne",
                bookimage:"img\\default\\book3.png",
                description: "Just So So"
            }
        ]
        var LikeService = {}

        LikeService.findLikeByUser = function(username, callback) {
            likesInUser = [];
            for (var i = 0; i < likes.length; i++) {
                var like = likes[i];
                if (like.username === username) {
                    likesInUser.push(like);
                }
            }
            callback(JSON.parse(JSON.stringify(likesInUser)));
        }

        LikeService.deleteLikeByUserNameAndBookIsbn = function(username, isbn, callback){
            for(var i=0; i< likes.length; i++){
                like = likes[i];
                if(like.username === username && like.isbn === isbn){
                    likes.splice(i, 1);
                    break;
                }
            }
            callback(null);
        }

        LikeService.updateLike = function(like, callback){
            for(var i=0; i< likes.length; i++){
                if(like.username === likes[i].username && like.isbn === likes[i].isbn){
                    likes[i].description = like.description;
                    break;
                }
            }
            callback(null);
        }

        return LikeService;
    }
})();