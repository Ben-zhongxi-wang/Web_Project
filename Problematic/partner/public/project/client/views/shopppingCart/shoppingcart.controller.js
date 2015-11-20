angular
    .module("EstoreApp")
    .controller("ShoppingCartController", ShoppingCartController);

function ShoppingCartController ($scope,$location, ShoppingCartService) {
    ShoppingCartService.findShoppingCartByUser("dongtj", function(records){
        $scope.records = records;
    })

    $scope.goCheck = function(){
        $location.path("/shoppingrecord");
    }

    $scope.enterBook = function(name){
        $location.path("/product");
    }
}
	