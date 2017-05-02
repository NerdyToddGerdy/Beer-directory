var express = require('express');
var router = express.Router();
var Users = require('../models/users.js');
var bcrypt = require('bcrypt');



router.post('/', function(req, res){
  console.log('create new user', req.body);
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    Users.create(req.body, function(err, createdUser){
      if(createdUser){
        console.log('successful registration! ');
      res.json(createdUser);
    }else{
      console.log("registraion err: ", err);
      res.json(err);
    }
    });
});

module.exports = router;
