var mongoose = require('mongoose');


var schema = {
    name: String,
    code: String,
    type: String,
    value: Number,
    enable: Boolean,
    uses: Number
};

module.exports = mongoose.model('Coupon', schema);
