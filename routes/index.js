var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var current = req.session.user;
  if (current){
      res.render('index', { title: 'Food Ordering Website', h1: 'Menu', user: req.session.user });
  } else{
    req.session.destroy()
    res.render('index', { title: 'Food Ordering Website', h1: 'Menu', user: false});
  }


});

router.get('/carts', function(req, res, next) {
  res.render('cart', { title: 'Cart', h1: 'Cart', user: req.session.user });
});

router.get('/login', function(req, res, next) {
  req.session.destroy();
  res.render('login', { title: 'Login', h1: 'Log In', user: false });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register', h1: 'Sign Up', user: false });
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'Checkout', h1: 'Checkout', user: req.session.user });
});


module.exports = router;
