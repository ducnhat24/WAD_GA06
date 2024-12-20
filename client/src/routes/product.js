const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');

router.get('/filter', ProductController.showProductFilter)
router.get('/', ProductController.showProduct);
router.get('/:id', ProductController.showProductDetails);

module.exports = router;