var express = require('express');
var router = express.Router();
var cart = require('../models/shoppingcart');

router.get('/', function(req, res, next) {
  res.json( {
      "resource": "/api/cart/",
      "description": "Returns the current Cart",
      "cart": cart.getCart(),
      "totalCost": cart.totalCost(),
      "totalCartQuantity": cart.getCart().length
  });
});

router.post('/add', function(req, res, next) {
  res.json( {
      "resource": "/api/cart/add",
      "description": "Adds and item to the Shopping Cart",
      "addItemToCart": cart.addItemToCart(req.body),
      "body": req.body
  });
});

router.delete('/remove/:id', function(req, res, next) {
  res.json( {
      "resource": "/api/cart/remove/:id",
      "description": "Remove an item from the Shopping Cart",
      "removeItemFromCart": cart.removeItemFromCart(req.params.id)
  });
});

module.exports = router;
