const validationName = (name) => {
  const validando = name ? name.trim() : '';
  if (!validando || validando === undefined) {
  return { type: 400, message: { message: '"name" is required' } };
  }
  if (validando.length < 5) {
    return { type: 422, message: { message: '"name" length must be at least 5 characters long' } };
  }
};

const validationNameProduct = (name) => {
  const validando = name ? name.trim() : '';
  if (!validando) return { type: 400, message: '"name" is required' };
  if (validando.length < 5) {
    return { type: 422, message: '"name" length must be at least 5 characters long' };
  }
};
module.exports = {
  validationName,
  validationNameProduct,
};
