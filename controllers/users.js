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
//====================================================
//update beers record
router.put('/beers/:id', function(req, res){
  Users.findById(req.params.id, function(err, updatedUser){
    if(updatedUser){
      // updatedUser.beers = [];
      // updatedUser.beers = req.body.beers;
      updatedUser.beers.push(req.body.beers);
      updatedUser.save();
      res.json(updatedUser);
    }
    else {
      res.json('failed to update')
    }
  });
});
//update breweries record
//====================================================
router.put('/breweries/:id', function(req, res){
  Users.findById(req.params.id, function(err, updatedUser){
    if(updatedUser){
      // updatedUser.breweries = [];
      // updatedUser.breweries = req.body.breweries;
      updateUser.breweries.push(req.body.breweries);
      updateUser.save();
      res.json(updatedUser);
    }
    else {
      res.json('failed to update');
    }
  });
});
//====================================================
//get record by id
router.get('/:id', function (req,res){
  Users.findById(req.params.id, function(err, foundUser){
    if(foundUser) {
      res.json(foundUser);
    }else{
      res.json('User is not found')
    }
  });
});
//====================================================
// delete record
router.delete('/:id', function(req, res){
  Users.findByIdAndRemove(req.params.id, function(err, deletedUser){
    res.json(deletedUser);
  });
});
//====================================================

module.exports = router;
