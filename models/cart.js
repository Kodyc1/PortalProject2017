var mongoose = require('mongoose');

var schema = {
    _id: String,
    title: String,
    img: String,
    price: Number,
    quantity: Number
};

module.exports = mongoose.model('Cart', schema);
