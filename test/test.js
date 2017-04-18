var assert = require('assert');
var UserModel = require("../models/user");


describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
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
