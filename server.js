var express = require('express')
var app = express();
var mongoose = require('mongoose');
// connect to heroku
var mongoDBURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/brewerydb'
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(express.static('public'));//static directory for js files
app.use(bodyParser.json());       // json bordy parsering

var breweriesController = require('./controllers/breweries.js')
app.use ('/breweries', breweriesController);



var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/brewerydb');
mongoose.connection.once('open', function(){
  console.log('Brewery app is connected to mongoodb');
})



app.listen(port, function(){
    console.log('Server is listening...');
});
