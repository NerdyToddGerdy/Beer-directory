var express = require('express');
var router = express.Router();
var Users = require('../models/users.js');
var bcrypt = require('bcrypt');

// router.get('/new', function(req, res){
//     res.render('sessions/new.ejs');
// });


// user log in section
router.post('/', function(req, res){
    Users.findOne({ username: req.body.username }, function(err, foundUser){
      if(foundUser){
        console.log('found user as ', foundUser.username);
        if( bcrypt.compareSync(req.body.password, foundUser.password) ){
            req.session.currentuser = foundUser;
            res.json(req.session);
        }else {  res.json("Invalid");}
      }else{
        res.json("Invalid");
      }
    });
});

//user log out
router.delete('/', function(req, res){
  console.log("DELETE SESSION when log out");
    req.session.destroy(function(){
        res.redirect('/');
    });
})

module.exports = router;
