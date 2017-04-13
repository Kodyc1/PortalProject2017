var http = require('http');
var express = require('express')
var mongoose = require('mongoose')

var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
  //console.log("hello")
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("HELLO FROM HERE");
  // we're connected!
});



var kittySchema = mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });
//console.log(silence.name); // 'Silence'


var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"


fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});

Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})

// Kitten.find({ name: /^fluff/ }, callback);