var express=require("express");
var app=express();

var mongoose = require('mongoose');

var localMongoPath = 'mongodb://localhost/cs5610fall2015';
var mongoConnectionPath = (process.env.OPENSHIFT_MONGODB_DB_URL || localMongoPath);
mongoose.connect(mongoConnectionPath);
var db = mongoose.connection;



var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json());
app.use(multer());


app.use(express.static(__dirname + '/client/'));



var ipaddress = process.env.OPENSHIFT_NODEJS_IP||"127.0.0.1";
var port=process.env.OPENSHIFT_NODEJS_PORT||3000;





require("./server/app.js")(app,mongoose,db);
app.listen(port,ipaddress);




app.use(function(req, res, next) {
    console.log(req.originalUrl);
    if(pathcontains(req.originalUrl, '/home','/add','/editor','/upload','/contact','/individual','/admin'))
        res.sendfile(__dirname + '/client/index.html');
    else
        res.send(200);
});

function pathcontains(path){
    return Array.prototype.slice.call(arguments,1).find(function(x){
        return path.indexOf(x)>-1;
    })
}
