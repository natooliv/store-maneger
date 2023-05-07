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
const insertSales = async (sales) => {
  const salesId = await modelSalesProduct.findByIdSales();
  await Promise.all(sales.map(async (obj) => modelSalesProduct.insertSales(salesId, obj)));
  const response = { id: salesId, itensSold: sales };
  return { type: null, message: response };
};
module.exports = {
  getAllSales,
  findByIdSales,
  insertSales,
};
