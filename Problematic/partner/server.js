#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var app = express();

/** set path public */
app.use(express.static(__dirname + '/public'));

/** Add body parser*/
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json

var multer = require('multer');
app.use(multer());


/** connection to local or openshift */
var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

require("./public/assignment/server/app.js")(app);

app.listen(port,ip);




