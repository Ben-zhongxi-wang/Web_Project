module.exports = function(app, model){

  app.post("/api/project/user",createUser);
  app.get("/api/project/usersall",findUsersAll);
  app.get("/api/project/user/:id",findUserById);
  app.get("/api/project/user/account/:account",findUserByAccount);
  app.get("/api/project/user/credentials/:username/:activation",findUserByCredentials);
  app.put("/api/project/user/:id",updateUserById);
  app.delete("/api/project/user/:id",deleteUserById);




  function createUser(req,res){
    var newUser = req.body;
    model.createUser(newUser).then(function(users){
        res.json(users);
    });
  }

  function findUsersAll(req,res){
    model.findUsersAll().then(function(users){
        res.json(users);
    });
  }

  function findUserById(req,res){
    var id = req.params.id;
    model.findUserById(id).then(function(user){
        res.json(user);
    });
  }

  function findUserByAccount(req,res){
    var account=req.body;
    model.findUserByAccount(account).then(function(user){
        res.json(user);
    });
  }


  function findUserByCredentials(req,res){
    var username=req.params("username");
    var activation=req.params("activation")
    if (username!==undefined &&
        activation!==undefined){
          var credentials={username:username,
            activation:activation};
          model.findUserByCredentials(credentials).then(function(user){
              res.json(user);
          });
    }
    else{
      alert("check your input, please");
      //?? TODO: what should I return here?
        model.findUsersAll().then(function(user){
          res.json(user);})
    }
  }


  function updateUserById(req,res){
    var id=req.params.id;
    var user=req.body;
    //console.log(user);
    model.updateUserById(id,user).then(function(users){
          res.json(users);
    })
  }


  function deleteUserById(req,res){
    var id=req.params.id;
    model.deleteUserById(id).then(function(users){
          res.json(users)
    })
  }
}
