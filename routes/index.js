var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('product', { title: 'Products' });

});

router.get("/cart.ejs", function(req, res){
    res.render("cart", { title: 'Shopping Cart' });
});

router.get("/checkout.ejs", function(req, res){
    res.render("checkout", { title: 'Checkout' });
});

router.get("/product.ejs", function(req, res){
    res.render("product", { title: 'Products' });
});

router.get("/confirmation.ejs", function(req, res){
    res.render("confirmation", { title: 'Order Confirmation' });
});

module.exports = router;
