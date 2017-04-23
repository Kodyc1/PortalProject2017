var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var current = req.session.user;
  console.log(req.cookies.session)

  if (current){
      res.render('index', { title: 'Food Ordering Website', h1: 'Menu', user: req.session.user});
  } else{
      res.redirect('/login')
  }
});

router.get('/carts', function(req, res, next) {
  var current = req.session.user;
  //console.log(req.cookies.session)
  if (current){
    res.render('cart', { title: 'Cart', h1: 'Cart', user: req.session.user});
  } else{
    res.redirect('/login')
  }
});

router.get('/login', function(req, res, next) {
  req.session.destroy();
  res.render('login', { title: 'Login', h1: 'Log In', user: {"_id":req.cookies.session} });
});

router.get('/register', function(req, res, next) {
  req.session.destroy()
  res.render('register', { title: 'Register', h1: 'Sign Up', user: {"_id":req.cookies.session} });
});

router.get('/checkouts', function(req, res, next) {
  var current = req.session.user;
  if (current){
      res.render('checkout', { title: 'Checkout', h1: 'Checkout', user: req.session.user});
  } else{
    res.redirect('/login')
  }
});

router.get('/receipt', function(req,res,next){
  var current = req.session.user;
  if (current){
      res.render('receipt', { title: 'Receipt', h1: 'Thank you for your order!', user: req.session.user});
  } else{
    res.redirect('/login')
  }
});

module.exports = router;
