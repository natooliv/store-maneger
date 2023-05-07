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
const insertSales = async (req, res) => {
  const sales = req.body;
  const result = await serviceSalesProduct.insertSales();
  const { type, message } = await serviceSalesProduct.insertSales(result.message, sales);
  return res.status(type).json(message);
};
module.exports = {
  getAllSales,
  findByIdSales,
  insertSales,
};
