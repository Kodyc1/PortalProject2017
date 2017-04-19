var assert = require('assert');
var chai = require('chai');

var UserModel = require("../models/user");


describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});


describe("users", function(){
  it('should list ALL menu on /menu GET', function(done) {
    chai.request("http:localhost:3000/menu")
      .get('/')
      .end(function(err, res){
        // res.should.have.status(200);
        done();
      });
  });
});

describe('User', function(){
  describe("#save()", function(){
    it('should save without error', function(done){
      var user = new UserModel({fname: 'Luna', lname: 'Lovegood',
                                email: "ll@ll.com", password: "ll"});
      user.save(function(err){
        if (err) done(err);
        else done();
      });
    });
  });
});
