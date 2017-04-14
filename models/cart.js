var mongoose = require('mongoose');

var schema = {
    title: String,
    img: String,
    price: Number,
    quantity: Number,
    ingredients: String
};

module.exports = mongoose.model('Cart', schema);
