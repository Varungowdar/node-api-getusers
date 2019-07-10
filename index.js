var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MethodOveride = require("method-override");
var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/myDb");
var cors = require('cors');

//app configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(MethodOveride());

app.use(cors());
app.get("/", function(req, res){
    res.send("Hello World");
});

var userController = require('./controller/userController');

app.post("/users", userController.create);

app.get("/users/", userController.readAll);

app.get("/user/:id", userController.readOne);

app.listen(8080, function(){
    console.log("app is listening to port 8080");
});