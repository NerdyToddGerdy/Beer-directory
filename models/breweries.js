var mongoose = require('mongoose');
var brewerySchema = mongoose.Schema{
  name: {type: String; unique: true , required: true},
  description: {type: String},
  location: { type: String },  // city state and or national
  tapRoom: { type: Boolean},
};
var Brewery = mongoose.model("Brewery", brewerySchema);
module.exports = Brewery;
