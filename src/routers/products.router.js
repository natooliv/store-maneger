const express = require('express');
const productsController = require('../controllers/product.controller');

const productRouter = express.Router();
productRouter.get('/', productsController.products);
productRouter.get('/:id', productsController.productById);
productRouter.post('/', productsController.insertNewProduct);

module.exports = productRouter;
