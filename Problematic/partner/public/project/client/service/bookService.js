/**
 * Created by Tianjie Dong on 2015/11/1.
 */
(function(){
    angular
        .module("EstoreApp")
        .factory("BookService", BookService)

    function BookService(){
        var books = [
            {
                isbn:"fafda-afafas-twrw-trtw",
                name: "Harry Potter1",
                image:"img\\default\\book1.png",
                author:"J. K. Rowling",
                price:"77",
                publisher:"River Publisher"
            },
            {
                isbn:"rqreqw-areeq-fdtrt-ttqr",
                name: "Harry Potter2",
                image:"img\\default\\book1.png",
                author:"J. K. Rowling",
                price:"77",
                publisher:"River Publisher"
            },
            {
                isbn:"ffdad-fdada-fdafasdf-vadvsaa",
                name: "Harry Potter3",
                image:"img\\default\\book1.png",
                author:"J. K. Rowling",
                price:"77",
                publisher:"River Publisher"
            },
            {
                isbn:"gfgdf-afgrgrs-fdafasdf-vadvsaa",
                name: "Harry Potter4",
                image:"img\\default\\book1.png",
                author:"J. K. Rowling",
                price:"77",
                publisher:"River Publisher"
            },
            {
                isbn:"fagrg-agrhth-fdafasdf-vadvsaa",
                name: "Animal World",
                image:"img\\default\\book2.png",
                price:"88",
                publisher:"Mountain Publisher"
            },
            {
                isbn:"rgsdgs-agrqw-fdafasdf-vadvsaa",
                name: "Game Of Throne",
                image:"img\\default\\book3.png",
                price:"99",
                publisher:"Love Publisher"
            },
            {
                isbn:"rgsfdas-agrqw-fdafasdf-vadvsaa",
                name: "House of Card",
                author:"aa",
                image:"img\\default\\book3.png",
                price:"55",
                seller:"dongtj",
                publisher:"Love Publisher"
            },
            {
                isbn:"rdadags-agrqw-fgjlkresdf-vadvsaa",
                name: "I love it",
                image:"img\\default\\book1.png",
                price:"15",
                author:"bb",
                seller:"dongtj",
                publisher:"Love Publisher"
            }
        ]
        var BookService = {}

        BookService.findAllBooks = function (callback){
            callback(JSON.parse(JSON.stringify(books)));
        }

        BookService.findBookByISBN = function(isbn, callback){
            var book = null;
            for(var i=0; i< books.length; i++){
                if(books[i].isbn === isbn){
                    book = books[i];
                    break;
                }
            }
            callback(JSON.parse(JSON.stringify(book)));
        }

        BookService.findBooksBySeller = function(name, callback){
            var booksInSeller = [];
            for(var i=0; i< books.length; i++){
                if(books[i].seller === name){
                    booksInSeller.push(books[i]);
                }
            }
            callback(JSON.parse(JSON.stringify(booksInSeller)));
        }

        return BookService;
    }
})();