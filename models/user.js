var mongoose = require('mongoose');

var schema = {
  username: {String, true, {unique: true}},
  password: {String, true}
};



module.exports = mongoose.model('User', schema);
