var express = require('express');
var mongoose = require('mongoose');
var CartModel = require('../models/cart');
var router = express.Router();



router.patch('/', function(req, res){
  // contains update params
  var body = req.body;

  //
  var update = new CartModel(body);



});

router.delete("/", function(req,res)){

}

router.post("/", function(req, res){
  var body = req.body;
  console.log(body);

  var newCart = new CartModel(body);
  newCart.save(function(err.doc){
    if(err){
      console.log(err);
      re.send(err);
    } else{
      console.log(doc);
      res.json(doc);
    }

  })
});

router.get('/', function(req, res){
  // get/find all cart items
  CartModel.find({}, function(err,docs){
    if(err){
      console.log(err);
      res.send(err);
    } else{
      res.json(docs);
    }
  });
});




module.exports = router;
