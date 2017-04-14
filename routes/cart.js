var express = require('express');
var mongoose = require('mongoose');
var CartModel = require('../models/cart');
var router = express.Router();



router.patch('/:id', function(req, res){
  // contains update params
  var body = req.body;
  var id = req.params.id;
  //
  CartModel.findByIdAndUpdate(id, { $set: {quantity: body["quantity"] }},
                              {new: true}, function(err,doc)
  {
    if(err){
      console.log(err);
      res.send(err);
    } else{
      res.send("Patched quantity")
    }
  })

});



router.delete("/:id", function(req,res){

  var id = req.params.id.toString();

  CartModel.remove({"_id":id},function(err, doc){
    if(err){
      console.log(err);
      res.send(err);
    } else{
      console.log(doc);
      res.send("DELETE request at id")
    }
  })

});



router.post("/", function(req, res){
  var body = req.body;
  console.log(body);

  var newCart = new CartModel(body);
  newCart.save(function(err,doc){
    if(err){
      console.log(err);
      res.send(err);
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