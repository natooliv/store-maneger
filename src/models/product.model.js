const connection = require('./connection');

const getAllProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products;',
  );
  console.log(products);
  return products;
};
const getProductById = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ? ',
    [id],
  );
  return product;
};
module.exports = {
  getAllProducts,
  getProductById,
};
