/**
 * Created by Tianjie Dong on 2015/11/1.
 */
(function(){
    angular
        .module("EstoreApp")
        .factory("ShoppingRecordService", ShoppingRecordService)

    function ShoppingRecordService(){
        var ShoppingRecords = [
            {
                username: "dongtj",
                bookname: "Harry Potter1",
                quantity: 2,
                date: "05/07/2015",
                price:"77"
            },
            {
                username: "dongtj",
                bookname: "Animal World",
                date: "05/08/2014",
                quantity: 10,
                price:"88"
            },
            {
                username: "dongtj",
                bookname: "Game Of Throne",
                date: "05/08/2013",
                quantity: 11,
                price:"99"
            }
        ]
        var ShoppingRecordService = {}

        ShoppingRecordService.findShoppingRecordByUser = function(username, callback) {
            ShoppingRecordsInUser = [];
            for (var i = 0; i < ShoppingRecords.length; i++) {
                var ShoppingRecord = ShoppingRecords[i];
                if (ShoppingRecord.username === username) {
                    ShoppingRecordsInUser.push(ShoppingRecord);
                }
            }
            callback(JSON.parse(JSON.stringify(ShoppingRecordsInUser)));
        }

        return ShoppingRecordService;
    }
})();