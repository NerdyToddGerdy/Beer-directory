var express = require('express');
var router = express.Router();
var Breweries = require('../models/breweries.js'); // Breweries schema
router.post('/', function(req, res){
  console.log('create new Brewery', req.body);
  Breweries.create(req.body, function (err, createdBrewery){
    res.json(createdBrewery)
  });
});

//update record
router.put('/:id', function(req, res){
  Breweries.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, udpatedBrewery){
    if(err) {console.log(err);}
    res.json(udpatedBrewery);
  });
});

// delete record
router.delete('/:id', function(req, res){
  Breweries.findByIdAndRemove(req.params.id, function(err, deletedBrewery){
    res.json(deletedBrewery);
  });
})

//breweries index page : for testing purpose
router.get('/', function(req, res){
  res.send('List  All Brewery here')
})

module.exports  = router;
