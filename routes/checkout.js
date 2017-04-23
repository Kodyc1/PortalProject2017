var express = require('express');
var mongoose = require('mongoose');
var CheckoutModel =  require('../models/checkout')
var router = express.Router();


// post new checkout receipt
router.post('/', function(req, res){
  var body = req.body;

  var id = req.session.user._id;

  var newCheckout = new CheckoutModel({userId: id,
                                        fname: body.fname,
                                        lname: body.lname,
                                        phone: body.phone,
                                        cart: body.cart,
                                        street: body.street,
                                        city: body.city,
                                        state: body.state,
                                        zipcode: body.zipcode});
  newCheckout.save(function(err,doc){
    if(err){
      res.send(err);
    } else{
      console.log(doc);
      res.json(doc);
    }
  })
})


// get receipt
router.post('/receipt', function(req,res){

    var id = req.session.user._id;

    CheckoutModel.find({userId: id}, function(err, obj){

      if(err){
        res.send(err);
      } else{
        res.json(obj);
      }

    });

});

// get all receipts
router.get('/', function(req,res){
  CheckoutModel.find({}, function(err,obj){
    if(err){
      res.send(err);
    } else{
      console.log(obj)
      res.json(obj);
    }
  })
})


module.exports = router;
