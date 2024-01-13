const express = require('express');
const router = express.Router();
const productsController = require('../controllers/product-controller.js');

router.post('/products', productsController.createProduct);
router.get('/products/:id', productsController.getProduct);
router.put('/updateProduct/:id', productsController.updateProduct);
router.delete('/deleteProduct/:id', productsController.deleteProduct);
router.get('/searchProduct', productsController.searchProducts);

module.exports = router;
