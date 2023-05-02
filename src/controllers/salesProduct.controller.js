const serviceSalesProduct = require('../services/salesProduct.service');

const getAllSales = async (req, res) => {
  const { type, message } = await serviceSalesProduct.getAllSales();
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

const findByIdSales = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await serviceSalesProduct.findByIdSales(id);
  if (type) return res.status(type).json({ message });
  res.status(200).json(message);
};

module.exports = {
  getAllSales,
  findByIdSales,
};
