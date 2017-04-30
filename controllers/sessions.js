var express = require('express');
var router = express.Router();
var Users = require('../models/users.js');
var bcrypt = require('bcrypt');

router.get('/new', function(req, res){
    res.render('sessions/new.ejs');
});

router.post('/', function(req, res){
    Users.findOne({ username: req.body.username }, function(err, foundUser){
        if( bcrypt.compareSync(req.body.password, foundUser.password) ){
            req.session.currentuser = foundUser;
            console.log('found user :', foundUser.username);
            res.redirect('/');
        } else {
            res.send('wrong password');
        }
    });
});

router.delete('/', function(req, res){
    req.session.destroy(function(){
        res.redirect('/');
    });
})

module.exports = router;
