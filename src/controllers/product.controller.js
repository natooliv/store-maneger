const productServices = require('../services/product.service');

const products = async (req, res) => {
  const { type, message } = await productServices.getAllProducts();

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productServices.getProductById(id);
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};
module.exports = {
  products,
  productById,
};
