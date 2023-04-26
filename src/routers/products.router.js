const express = require('express');
const productsController = require('../controllers/product.controller');

const productRouter = express.Router();
productRouter.get('/', productsController.products);

module.exports = productRouter;
