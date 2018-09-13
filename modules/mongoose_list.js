// grab the things we need
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/local');

var Schema = mongoose.Schema;

// create a schema
var listSchema = new Schema({
  id: Number,
  name: String,
});

// the schema is useless so far
// we need to create a model using it
var List = mongoose.model('list', listSchema);

// make this available to our users in our Node applications
module.exports = List;