var mongoose = require('mongoose'); // include mongoose
var Schema = mongoose.Schema;// creating mongoose schema

var userSchema = Schema({
    username: {type: String, unique: true, required: true },
    password: {type: String, required: true},
    isAdmin: Boolean,
    beers: [],
    breweries:[],
    
});

var User = mongoose.model('User', userSchema);

module.exports = User;
