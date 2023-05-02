const express = require('express');
const salesController = require('../controllers/salesProduct.controller');

const productRouter = express.Router();
productRouter.get('/', salesController.getAllSales);
productRouter.get('/:id', salesController.findByIdSales);

module.exports = productRouter;
