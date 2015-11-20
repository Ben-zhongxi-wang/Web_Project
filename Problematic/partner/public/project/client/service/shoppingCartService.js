/**
 * Created by Tianjie Dong on 2015/11/1.
 */
(function(){
    angular
        .module("EstoreApp")
        .factory("ShoppingCartService", ShoppingCartService)

    function ShoppingCartService(){
        var ShoppingCarts = [
            {
                isbn:"fadfasv-afafas-fdafasdf-vadvsaa",
                username: "dongtj",
                bookname: "Harry Potter1",
                quantity: 2,
                price:"77"
            },
            {
                isbn:"jgksgr-fehlaf-fjald-fjflak",
                username: "dongtj",
                bookname: "Animal World",
                quantity: 10,
                price:"88"
            },
            {
                isbn:"fdada-zxsafd-fdfd-fda",
                username: "dongtj",
                bookname: "Game Of Throne",
                quantity: 11,
                price:"99"
            }
        ]
        var ShoppingCartService = {}

        ShoppingCartService.findShoppingCartByUser = function(username, callback) {
            ShoppingCartsInUser = [];
            for (var i = 0; i < ShoppingCarts.length; i++) {
                var ShoppingCart = ShoppingCarts[i];
                if (ShoppingCart.username === username) {
                    ShoppingCartsInUser.push(ShoppingCart);
                }
            }
            callback(JSON.parse(JSON.stringify(ShoppingCartsInUser)));
        }

        return ShoppingCartService;
    }
})();