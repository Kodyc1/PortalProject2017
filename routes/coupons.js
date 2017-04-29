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


router.post('/code', function(req, res){
  // get/find all cart items
  var body = req.body;
  CouponModel.findOne({code: req.body.code}, function(err,coupon){
    if (err){
      res.send(false);
    }
    else{
      if (!coupon){
        res.send(false);
      }else{
        res.send(coupon);
      }
    }
  })
});


router.post('/find', function(req, res){
  // get/find all cart items
  var body = req.body;
  CouponModel.findOne({_id: body._id}, function(err,coupon){
    if (err){
      res.send(false);
    }
    else{
      if (!coupon){
        res.send(false);
      }else{
        res.send(coupon);
      }
    }
  })
});

router.post("/", function(req,res){
  var body = req.body;

  var newCoupon = new CouponModel(body);
  newCoupon.save(function(err, docs){
    if(err){
      console.log(err)
      res.send(err);
    } else{
      //console.log(docs)
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

router.post("/uses", function(req,res){
  var body = req.body;

  CouponModel.findOneAndUpdate({_id: body._id}, {uses: body.uses})
  .then(function(updatedCoupon){
    res.json(updatedCart);
    done();
  })
  .catch(function(err){
    res.send(err);
  })
})




module.exports = router;
