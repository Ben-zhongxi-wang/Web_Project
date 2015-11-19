var users=require("./users.mockup.json");
module.exports=function(app){

	var api={
		createUser : createUser,
		findUsersAll: findUsersAll,
		findUserById: findUserById,
		findUserByAccount: findUserByAccount,
		updateUserById: updateUserById,
		deleteUserById: deleteUserById
	};

	return api;

	function createUser(user){
		users.push(user);
		return user;
	}

	function findAll(){
		return users;
	}

	function findUserById(id){
		var userById={};
		for(var i=0;i<users.length;i++){
				if(users[i].id==id){
					userById=users[i];
					break;
				}
		}
		return userById;
	}

	function findUserByAccount(account){
		var userByAccount={}
		for (var i=0; i<users.length; i++){
			if (users[i].account==acount){
					userByAccount=users[i];
					break;
			}
		}
		return userByAccount;
	}


	function updateUserById(id,updatedUser){
		for(var i=0;i<users.length;i++)
		{
				if(users[i].id==id){
						updatedUser.id = id;
						users[i] = updatedUser;
						break;
				}
		}
		return updatedUser;
	}

	function deleteUserById(id){
		for(var i=0;i<users.length;i++)
		{
				if(users[i].id==id){
						users.splice(i,1);
						break;
				}
		}
		return users;
	}

}
