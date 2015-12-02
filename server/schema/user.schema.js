module.exports=function(app,mongoose,db){

    var UserSchema = mongoose.Schema({
        Name: String,
        account: String,
        activation: String,
        id: Number
    },{collection:"cs5610.project.user"});
    return UserSchema;
}