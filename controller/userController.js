var User = require("../models/User.js");

//add users
exports.create = function(req, res){
    var user = new User.UserModel({
        name : req.body.name,
        age : req.body.age,
        proffession : req.body.proffession,
        description : req.body.description,
        id : req.body.id
    }).save(function(err, user){
        if(err)
            res.status(500).send(err.message);
        res.json(user);
    })
}
    
// Finds a single User in the db
exports.readOne = function (req, res) {
    if(req.params.id === undefined)
        return res.status(400).send({});    
    User.UserModel.findOne({id: req.params.id}, function(err, user){
        if(err)
        return res.status(500).send(err.message);
    return res.json(user); 
    }); 
};

// Finds all User in the db
exports.readAll = function (req, res) {
    User.UserModel.find(function(err, users){
        if(err)
        return res.status(500).send(err.message);
    return res.json(users);
    });
};