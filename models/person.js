var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds155130.mlab.com:55130/username');
var Schema = mongoose.Schema;

// Define Schema
var personSchema = new Schema({
  name : String,
  comments  : String,
});

module.exports = mongoose.model('Person', personSchema);
