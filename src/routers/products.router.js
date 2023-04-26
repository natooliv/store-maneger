const express = require('express');
const productsController = require('../controllers/product.controller');

const productRouter = express.Router();
productRouter.get('/', productsController.products);
productRouter.get('/:id', productsController.productById);

module.exports = productRouter;
