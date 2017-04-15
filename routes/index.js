var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Food Ordering Website', h1: 'Menu', user: req.kody.user });
});

router.get('/carts', function(req, res, next) {
  res.render('cart', { title: 'Cart', h1: 'Cart' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login', h1: 'Log In' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register', h1: 'Sign Up' });
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'Checkout', h1: 'Checkout' });
});


module.exports = router;
