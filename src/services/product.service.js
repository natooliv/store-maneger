const productsModel = require('../models/product.model');
const { validationName } = require('../middlewares/validations/name.validations.service');

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
const insertNewProduct = async (product) => {
  if (validationName(product)) return validationName(product);

  const result = await productsModel.insertNewProduct(product);
  console.log(result);
  return { type: null, message: result };
};

module.exports = {
  getAllProducts,
  getProductById,
  insertNewProduct,
};
