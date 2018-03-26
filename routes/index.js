var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/cart.ejs", function(req, res){
    res.render("cart");
});

router.get("/checkout.ejs", function(req, res){
    res.render("checkout");
});

router.get("/product.ejs", function(req, res){
    res.render("product");
});

router.get("/confirmation.ejs", function(req, res){
    res.render("confirmation");
});

module.exports = router;
