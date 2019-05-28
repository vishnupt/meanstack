const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  name: {
    type: String
  },
  rating: {
    type: Number
  },
  place: {
    type: String
  },
  image: {
     type: String
  }
},{
    collection: 'businessesnew'
});

module.exports = mongoose.model('Business', Business);