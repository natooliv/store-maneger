const productsModel = require('../models/product.model');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return { type: null, message: products };
};

module.exports = {
  getAllProducts,
};
