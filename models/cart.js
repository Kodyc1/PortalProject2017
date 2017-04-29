var mongoose = require('mongoose');
var MenuModel = require('../models/menu');

var item = {
    info: Object,
    quantity: Number
}

var schema = {
    userId: String,
    coupon: String,
    items: [item]
};

module.exports = mongoose.model('Cart', schema);
