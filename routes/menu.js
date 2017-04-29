var express = require('express');
var mongoose = require('mongoose');
var MenuModel = require('../models/menu');
var router = express.Router();


router.delete('/:id', function(req,res){

  var id = req.params.id.toString();

  MenuModel.remove({"_id":id}, function(err, doc){
    if(err){
      console.log(err);
      res.send(err);
    } else{
      //console.log(doc);
      res.send("delete request at id")
    }
  });
});

// post request to menu
router.post('/', function(req, res){
  // body of the request
  var body = req.body;
  //console.log(body);
  // create new menu item with post request
  var newMenu = new MenuModel(body);
  newMenu.save(function(err, doc){
    if (err){
      console.log(err);
      res.send(err);
    } else{
      //console.log(doc);
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


module.exports = router;
