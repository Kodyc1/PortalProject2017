var assert = require('assert');
var chai = require('chai').assert;
var request = require("superagent");


var UserModel = require("../models/user");


var port = 3001;

// describe('Array', function(){
//   describe('#indexOf()', function(){
//     it('should return -1 when the value is not present', function(){
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });

describe("Menu API", function(){
  before(function(){
    console.log(`Attempting to start server on port ${port}`)
    require('../bin/www');
  })

  it('should list ALL menu on /menu GET', function(done) {
      request
        .get(`http://localhost:${port}/menu`)
        .end(function(err, res){

          // Check status code
          chai.equal(res.statusCode, 200, 'statuscode is not 200');
          // Check content type
          chai.equal(res.type,'application/json', 'Application type is not JSON');
          // Check data
          chai.isOk(Array.isArray(res.body), "Expected body type should be array");
          chai.isOk(res.body.length > 0, "Body length should be not empty");
          //console.log(res.body);

          done();
        })
  });
});

// get all users by GET to /users/
describe("User API", function(){
  it('should list all users in /users POST', function(done){
      request
        .get(`http://localhost:3000/users`)
        .end(function(err, res){
          //console.log(res.body);

          chai.isOk(Array.isArray(res.body), "Expected type should be array");

          done();
        })
  })
})




// register by POSTing to /users/
describe("Register a new user", function(done){
  it('should return info of logged in person POST', function(done){
    request
      .post(`http://localhost:3000/users/`)
      .send({fname: "z",
            lname: "z",
            username: "z@gmail.com",
            password: "z"
            })
      .then(function(err,res){
        console.log("created new account")
        done();
      })
      .catch((err) => {
        console.log(err);
      })
  })
})


// create new cart for a user by POSTing to /cart/
// data {userId: id, items: []}
describe("Create new user's cart", function(done){
  let agent = null;
  before(function(done){
    console.log(`Attempting to start server on port ${port}`)
    require('../bin/www');
    agent = request.agent();
    agent
      .post(`http://localhost:${port}/users/login`)
      .send({username: 'a@a.com', password: 'a'})
      .then(function(err,res){
        done();
      })
      .catch((err) => {
        console.log(err);
      })
  })
  it('should create new empty cart in cart database', function(done){
    agent
      .post(`http://localhost:${port}/cart/users`)
      .send({items: []})
      .end(function(err, res){
        console.log("attached empty cart to user");

        done();
      })
  })
})



// update cart for a user by POSTing to /cart/
// data {userId: id, hardcoded items}
describe("Update user's cart", function(done){
  let agent = null;
  before(function(done){
    console.log(`Attempting to start server on port ${port}`)
    require('../bin/www');
    agent = request.agent();
    agent
      .post(`http://localhost:${port}/users/login`)
      .send({username: 'a@a.com', password: 'a'})
      .then(function(err,res){
        done();
      })
      .catch((err) => {
        console.log(err);
      })
  })
  it('should update cart in cart database', function(done){
    agent
      .post(`http://localhost:${port}/cart/users`)
      .send({items: [
        {
            "quantity" : 1,
            "info" : {
                "_id" : "58efc7be16e26f1a14f0425b",
                "title" : "Steak",
                "img" : "Pics/steak.jpg",
                "price" : "20",
                "ingredients" : "Beef",
                "__v" : "0"
            }
        }
    ]})
      .end(function(err, res){
        done();
      })
  })
})


// test checkout API
describe("Add to checkout order list", function(done){




  
})
