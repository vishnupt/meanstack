const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let User = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  dob: {
    type: String
  },
  gender: {
    type: String
  }
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);