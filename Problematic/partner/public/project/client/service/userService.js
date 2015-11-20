/**
 * Created by Tianjie Dong on 2015/11/1.
 */
(function(){
    angular
        .module("EstoreApp")
        .factory("UserService", UserService)

    function UserService(){
        var users = [
            {
                firstname: "Tianjie",
                lastname: "Dong",
                username: "dongtj",
                password: "Dongtj2015",
                gender: "Male",
                age: "05/07/1991",
                image:"img\\default\\person_image.png",
                email: "dong.ti@husky.neu.edu",
                phone:"000-000-0000"
            },
            {
                firstname: "Tom",
                lastname: "John",
                username: "john",
                password: "123456",
                image:"img\default\person_image.png",
                email: "john@gmail.com",
                address: "14 xx Ave, #48, Boston",
                phone:"123-000-1111"
            }
        ]
        var UserService = {}

        UserService.findUserByUsernameAndPassword = function(username, password, callback){
            user = null;
            for(var i=0; i< users.length; i++){
                if(users[i].username == username && users[i].password == password){
                    user = users[i];
                    break;
                }
            }
            callback(JSON.parse(JSON.stringify(user)));
        }

        UserService.findAllUsers = function(callback){
            callback(JSON.parse(JSON.stringify(users)));
        }

        UserService.createUser = function(user, callback){
            var newUser = JSON.parse(JSON.stringify(user));
            newUser.id = guid();
            users.push(newUser);
            callback(JSON.parse(JSON.stringify(newUser)));
        }

        UserService.deleteUserById = function(id, callback){
            for(var i=0; i< users.length; i++){
                user = users[i];
                if(user.id == id){
                    users.splice(i, 1);
                    break;
                }
            }
            callback(JSON.parse(JSON.stringify(users)));
        }

        UserService.updateUser = function(id, user, callback){
            for(var i=0; i< users.length; i++){
                if(users[i].id == id){
                    delete users[i];
                    users[i] = JSON.parse(JSON.stringify(user));
                    users[i].id = id;
                    callback(JSON.parse(JSON.stringify(users[i])));
                    return;
                }
            }
            callback(null);
        }

        return UserService;
    }
})();

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}