var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CoderFactory' });
});

router.get('/api', function(req, res, next) {
  res.json( {
    "GET /api/cart": "Returns the items in the Shopping Cart",
    "POST /api/cart/add": "Adds an item to the Shopping Cart",
    "DELETE /api/cart/remove/:id": "Removes an item from the Shopping Cart"
  });
});

module.exports = router;
