const productsModel = require('../models/product.model');
const { validationName,
  validationNameProduct } = require('../middlewares/validations/name.validations.service');

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
  if (validationNameProduct(product)) return validationNameProduct(product);

  const result = await productsModel.insertNewProduct(product);
  console.log(result);
  return { type: null, message: result };
};
const updateProduct = async (id, name) => {
  const validadeProduct = await validationName(name);
  if (validadeProduct) return validadeProduct;
  const product = await productsModel.updateProduct(id, name);
  console.log(product);
  if (product.changedRows === 0) {
    return { type: 404, message: { message: 'Product not found' } };
  }
  return { type: 200, message: { id, name } };
};

module.exports = {
  getAllProducts,
  getProductById,
  insertNewProduct,
  updateProduct,
};
