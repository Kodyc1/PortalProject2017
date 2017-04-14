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



/* GET users listing. */
router.get("/", function(req,res){

  UserModel.find({}, function(err,docs){
    if (err){
      console.log(err);
      res.send(err);
    } else{
      console.log("hello");
      res.json(docs);
    }
  });
});



module.exports = router;
