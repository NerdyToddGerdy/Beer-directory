var mongoose = require('mongoose')

var beerSchema = mongoose.Schema({
  name: {type: String, required: true, unique: true},
  description: String
})


var beer = mongoose.model('Beer', beerSchema);

module.exports = beer;
