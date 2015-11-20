angular
    .module("EstoreApp")
    .controller("ShoppingRecordController", ShoppingRecordController);

function ShoppingRecordController ($scope, $location, ShoppingRecordService) {
    ShoppingRecordService.findShoppingRecordByUser("dongtj", function(records){
        $scope.records = records;
    })

    $scope.enterBook = function(name){
        $location.path("/product");
    }
}
	