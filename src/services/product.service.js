const productsModel = require('../models/product.model');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return { type: null, message: products };
};

const getProductById = async (id) => {
  const product = await productsModel.getProductById(id);
  if (!product) {
    return { type: 404, message: 'Product not found' };
}
return { type: null, message: product };
};

module.exports = {
  getAllProducts,
  getProductById,
};
