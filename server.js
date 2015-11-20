var express=require("express");
var app=express();
app.use(express.static(__dirname + '/client'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());



var ipaddress = process.env.OPENSHIFT_NODEJS_IP||"127.0.0.1";
var port=process.env.OPENSHIFT_NODEJS_PORT||3000;



require("./server/app.js")(app);
app.listen(port,ipaddress);
