var express = require('express')
var app = express();
var mongoose = require('mongoose');
var session = require('express-session');
// connect to heroku
var mongoDBURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/brewerydb'
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
    secret: "feedmeseymour", //some random string
    resave: false,
    saveUninitialized: false
}));

app.use(methodOverride('_method'));
app.use(express.static('public'));//static directory for js files
app.use(bodyParser.json());       // json bordy parsering

//breweries section
var breweriesController = require('./controllers/breweries.js')
app.use ('/breweries', breweriesController);

//session controller section
var sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

//user controller section
var usersController = require('./controllers/users.js');
app.use('/users', usersController);

// app.get('/', function(req, res){
//   console.log('redirect to index.html, and user is ', req.session.currentuser);
//     res.redirect('index.html', {
//         currentUser: req.session.currentuser
//     });
// });
// load index page
// app.get('/', function(req, res){
//   res.redirect('/index.html');
// })
var mongoose = require('mongoose');
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/brewerydb';
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
  console.log('Brewery app is connected to mongoodb');
});



app.listen(port, function(){
  console.log('--------------------------');
  console.log('Server running on port: ' + port);
  console.log('--------------------------');
});
