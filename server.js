var express=require("express");
var passport = require('passport');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer = require('multer');


var app=express();
app.use(bodyParser.json());
app.use(multer());
app.use(cookieParser());
app.use(methodOverride());
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());



var localMongoPath = 'mongodb://localhost/cs5610fall2015';
var mongoConnectionPath = (process.env.OPENSHIFT_MONGODB_DB_URL || localMongoPath);
mongoose.connect(mongoConnectionPath);
var db = mongoose.connection;




//////////////////////////////////////////////////////////
// Passport configuration

var UserSchema2 = require ("./server/schema/user.schema.js")(app,mongoose,db);
var UserModel2 = mongoose.model("UserModel2", UserSchema2);
//////////////////////////////////////////////////////////////
function createUser(user){
    UserModel2.create(user,function(err,doc){
        UserModel2.find(function(err,users){
            return users;
        })
    })
}

function findUserByGoogleId(googleid){
    UserModel2.findOne({id:googleid}, function(err,user){
        return user;
    })
}


function findOrCreate(user){
    return findUserByGoogleId(user.id) || createUser(user) ;

}


/////////////////////////////////////////////////////////////
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    done(null, findUserByGoogleId(id));})

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/oauth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, findOrCreate({
            id: profile.id,
            Name: profile.displayName
        }));
    }
));

app.get('/oauth/google',
    passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/plus.login']
    }));

app.get('/oauth/google/callback',
    passport.authenticate('google'),
    function(req, res) {
        res.redirect('/home');
    });

app.get('/logout', function(req, res){
    req.logout();
    res.send(200);
});
///////////////////////////////////////////////////

///////////////////////////////////////////
app.get('/profile', authenticationCheck, function (req, res) {
    res.json(req.user);
});

function authenticationCheck(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.send(401);
}
///////////////////////////////////////////////////






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
