var express = require('express');
var mongoose = require("mongoose");
var UserModel = require("../models/user");
var router = express.Router();


// post request to menu
router.post('/', function(req, res){
  // body of the request
  var body = req.body;
  //console.log(body);
  // create new menu item with post request
  var newUser = new UserModel(body);
  newUser.save(function(err, newuser){
    if (err){
      console.log(err);
      res.send(err);
    } else{
      //console.log(newuser);
      res.send(newuser._id);
    }
  });
});


router.post('/login', function(req, res){

  var body = req.body;

  UserModel.findOne({username: req.body["username"].trim()}, function(err, user){

    if (err){

      res.send(false);
    }

    else{
      if (!user){
        res.send(false);
      }else{
        user.comparePassword(req.body["password"], function(err, match){

          if (err) {
            res.status(401).send();
          }
          req.session.user = user;
          //console.log(req.session.user);
          res.send(match);
        });
      }
    }
  })

});



/* GET users listing. */
router.get("/", function(req,res){

  UserModel.find({}, function(err,docs){
    if (err){
      console.log(err);
      res.status(401).send();
    } else{
      res.json(docs);
    }
  });
});



module.exports = router;
