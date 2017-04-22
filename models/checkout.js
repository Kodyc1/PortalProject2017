var mongoose = require('mongoose');
var CartModel = require('../models/cart');


var item = {
    info: Object,
    quantity: Number
}

var schema = {
    userId: String,
    cart: [item],
    street: String,
    city: String,
    state: String,
    zipcode: String
};

module.exports = mongoose.model('Checkout', schema);
