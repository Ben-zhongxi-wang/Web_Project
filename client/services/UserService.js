var uuid = require('node-uuid');


(function(){
  angular
    .module("BlogApp")
    .factory("UserService",UserService);

    function UserService($rootScope,$q,$http){

        var service = {
          createUser : createUser,
          findUsersAll: findUsersAll,
          findUserById: findUserById,
          findUserByAccount: findUserByAccount,
          findUserByCredentials: findUserByCredentials,
          updateUserById: updateUserById,
          deleteUserById: deleteUserById
        };
        return service;

        function createUser(newUser){
          var deferred=$q.defer();
          newUser.id=uuid.v4();
          $http.post("")
        }

    };
})
