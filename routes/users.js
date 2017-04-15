var express = require('express');
var mongoose = require("mongoose");
var UserModel = require("../models/user");
var router = express.Router();


// post request to menu
router.post('/', function(req, res){
  // body of the request
  var body = req.body;
  console.log(body);
  // create new menu item with post request
  var newUser = new UserModel(body);
  newUser.save(function(err, doc){
    if (err){
      console.log(err);
      res.send(err);
    } else{
      console.log(doc);
      res.json(doc);
    }
  });
});


router.patch('/', function(req, res){

  var body = req.body;

  UserModel.findOne({username: req.body["username"].trim()}, function(err, user){

    if (err) throw err;

    user.comparePassword(req.body["password"], function(err, match){
      if (err) throw err;
      console.log(match);
      res.send(match);
    });
  })

});



/* GET users listing. */
router.get("/", function(req,res){

  UserModel.find({}, function(err,docs){
    if (err){
      console.log(err);
      res.send(err);
    } else{
      req.kody.user = docs;
      res.json(docs);
    }
  });
});



module.exports = router;
