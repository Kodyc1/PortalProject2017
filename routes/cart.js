var express = require('express');
var mongoose = require('mongoose');
var CartModel = require('../models/cart');
var router = express.Router();


// create new cart lists
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


// get the current cart list
router.get('/users', function(req, res){
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


// update cart
router.post("/users", function(req, res){
  var body = req.body;

  var id = req.session.user._id;

  //console.log(body.items);

  // res.send(body);

  CartModel.findOneAndUpdate( {userId: id},
                              {items: body.items},
                              {upsert:true} )
    .then (function(updatedCart){
      res.json(updatedCart);
    })
    .catch (function(err){
      res.send(err);
    })

});




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



module.exports = router;
