const modelSalesProduct = require('../models/salesProduct.model');

const getAllSales = async () => {
  const sales = await modelSalesProduct.getAllSales();
  return { type: null, message: sales };
};
const findByIdSales = async (id) => {
  const sale = await modelSalesProduct.findByIdSales(id);
  if (sale.length === 0) return { type: 404, message: 'Sale not found' };
  return { type: null, message: sale };
};
module.exports = {
  getAllSales,
  findByIdSales,
};
