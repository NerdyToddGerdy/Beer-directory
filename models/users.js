var mongoose = require('mongoose'); // include mongoose
var Schema = mongoose.Schema;// creating mongoose schema

var userSchema = Schema({
    username: String,
    password: String,
    isAdmin: Boolean
});

var User = mongoose.model('User', userSchema);

module.exports = User;
