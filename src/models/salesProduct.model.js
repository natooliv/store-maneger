const connection = require('./connection');

const getAllSales = async () => {
  const [sales] = await connection.execute(
    `SELECT allProduct.sale_id AS saleId, date,
      allProduct.product_id AS productId, allProduct.quantity
    FROM StoreManager.sales AS allSales, StoreManager.sales_products AS allProduct
    WHERE allSales.id = allProduct.sale_id
    GROUP BY allProduct.sale_id, allSales.date, allProduct.product_id, allProduct.quantity
    ORDER BY allProduct.sale_id, allProduct.product_id;`,
    [],
  );
  return sales;
};
const findByIdSales = async (id) => {
  const [sale] = await connection.execute(
    `SELECT date, product_id AS productId, quantity
      FROM StoreManager.sales AS allSales, StoreManager.sales_products AS salesProduct
      WHERE id = (?) AND allSales.id = salesProduct.sale_id;`,
    [id],
  );
  return sale;
};
module.exports = {
  getAllSales,
  findByIdSales,
};
