var mongoose = require('mongoose');

var schema = {
    title: String,
    img: String,
    price: Number,
    ingredients: String
};

module.exports = mongoose.model('Menu', schema);
