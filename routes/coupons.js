var express = require('express');
var mongoose = require('mongoose');
var CouponModel = require('../models/coupon');
var router = express.Router();



// get the current cart list
router.get('/', function(req, res){
  // get/find all cart items
  CouponModel.find({}, function(err,docs){
    if(err){
      console.log(err);
      res.send(err);
    } else{
      res.json(docs);
    }
  });
});


router.post("/", function(req,res){
  var body = req.body;

  var newCoupon = new CouponModel(body);
  newCoupon.save(function(err, docs){
    if(err){
      console.log(err)
      res.send(err);
    } else{
      console.log(docs)
      res.json(docs);
    }
  })
});


router.post("/enable", function(req,res){
  var body = req.body;

  CouponModel.findOneAndUpdate({_id: body._id}, {enable: body.enable})
  .then(function(updatedCoupon){
    res.json(updatedCart);
    done();
  })
  .catch(function(err){
    res.send(err);
  })
})




module.exports = router;
