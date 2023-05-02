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

const insertNewProduct = async (product) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.products (name)
    VALUES (?)`,
    [product],
  );
  return { id: insertId, name: product };
};

const updateProduct = async (id, name) => {
  const [product] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ? ',
    [name, id],
  );
  return product;
};
module.exports = {
  getAllProducts,
  getProductById,
  insertNewProduct,
  updateProduct,

};
