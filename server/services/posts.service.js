module.exports = function (app,model){

  app.post("/api/project/user/:userId/post", createPost)
  app.put("/api/project/post/:postId", updatePostById)
  app.delete("api/project/post/:postId", deletePostById)
  app.get("api/project/post", findPostsAll) //??
  app.get("api/project/post/:postId", findPostById)
  app.get("api/project/post/tag",findPostsByTag) //??
  app.get("/api/assignment/user/:userId/post",findPostsByUserId)

  function createPost(req,res){
    var newPost = req.body;
    res.json(model.createPost(newPost));
  }

  function updatePostById (req,res){
    var updatedPost=req.body;
    var id=req.params.postId;
    res.json(model.updatePostById(id,updatedPost));
  }

  function deletePostById(req,res){
    var id=req.params.postId;
    res.json(model.deletePostById(id));
  }

  function findPostsAll(req,res){
    res.json(model.findPostsAll());
  }

  function findPostById(req,res){
    id=req.params.postId;
    res.json(model.findPostById(id));
  }

  function findPostByTag(req,res){
    var tag=req.body; //??
    res.json(model.findPostsByTag(tag));
  }

  function findPostsByUserId(req,res){
    var userId=req.params.userId;
    res.json(model.findPostsByUserId(userId));
  }

}
