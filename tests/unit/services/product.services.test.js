const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const {todosProdutos,
  idReturn,
  returnQuery,
  menssageError } = require('../../mocks/products.mock');
const productsModel = require('../../../src/models/product.model');
const productService = require('../../../src/services/product.service');


describe('Testes da camada Service dos produtos.', function () {
  afterEach(sinon.restore);
  it('Verifica se todos os produtos estão sendo retornados.', async function () {
    sinon.stub(productsModel, 'getAllProducts').resolves(todosProdutos);
    const res = { type: null, message: todosProdutos };
    console.log(res);
    const produtos = await productService.getAllProducts();
    expect(produtos.message).to.be.deep.equal(res.message);
  });
  it('Verifica se o produto está sendo retornado pelo id.', async function () {
    sinon.stub(productsModel, 'getProductById').resolves(idReturn);
   const res = { type: null, message: idReturn };
  const produto = await productService.getProductById(1);
  expect(produto).to.be.deep.equal(res);
 });
  it('Verificando se o id é  valido.', async function () {
    sinon.stub(productsModel, 'getProductById').resolves(undefined);
  const res = { type: 404, message:menssageError.message };
 const produto = await productService.getProductById(66);
   expect(produto).to.be.deep.equal(res);
  });
});
