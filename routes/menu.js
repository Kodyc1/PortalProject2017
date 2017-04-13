var express = require('express');
var mongoose = require('mongoose');
var MenuModel = require('../models/menu');
var router = express.Router();


// post request to menu
router.post('/', function(req, res){
  // body of the request
  var body = req.body;
  console.log(body);
  // create new menu item with post request
  var newMenu = new MenuModel(body);
  newMenu.save(function(err, doc){
    if (err){
      console.log(err);
      res.send(err);
    } else{
      console.log(doc);
      res.json(doc);
    }
  });
});

// get request to menu
router.get('/', function(req,res){
  // find all and get them as a json
  MenuModel.find({}, function(err, docs){
    if(err){
      console.log(err);
      res.send(err);
    } else{
      res.json(docs);
    }
  });
});

/* GET home page. */
// router.get('/', function(req, res) {
//   // TODO: get all menu items
//   var kitty = new Menu({ name: 'Zildjian' });
//
//   kitty.save(function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('meow');
//     }
//   });
//   res.json([]);
//
// });

module.exports = router;
