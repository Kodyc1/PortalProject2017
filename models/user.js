var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        bcrypt = require('bcrypt'),
        SALT_WORK_FACTOR = 10;

var schema = new Schema({
  fname: {type:String, required: true},
  lname: {type:String, required: true},
  username: {type:String, required:true, unique: true},
  password: {type:String, required:true},
  quantity: [Number]
});

schema.methods.toJSON = function(){
  var obj = this.toObject();
  delete obj.password;
  return obj;
}

schema.pre('save', function(next){
  var user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if (err){
      return next(err);
    }

    bcrypt.hash(user.password, salt, function(err,hash){
      if (err) return next(err);

      user.password = hash;
      next();
    });

  });

});

schema.methods.comparePassword = function(candidatePassword, cb){
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if (err) return cb(err);
    cb(null, isMatch);
  });
};



module.exports = mongoose.model('User', schema);
