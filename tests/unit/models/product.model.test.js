const chai = require('chai');
const { expect } = chai
const sinon = require('sinon');
const productsModel = require('../../../src/models/product.model');
const connection = require('../../../src/models/connection');
const {todosProdutos,
  idReturn,
  returnQuery,
  menssageError,}= require('../../mocks/products.mock');


describe('Testes da camada Model dos produtos.', function () {
  afterEach(sinon.restore);
  it('Verifica se todos os produtos estão sendo retornados.', async function () {
    sinon.stub(connection, 'execute').resolves(todosProdutos);
    const produtos = await productsModel.getAllProducts();
    expect(produtos).to.be.deep.equal(todosProdutos[0]);
  });
  it('Verifica se o produto está sendo retornado pelo id.', async function () {
    sinon.stub(connection, 'execute').resolves([idReturn]);
    const produto = await productsModel.getProductById(1);
    expect(produto).to.be.an('object');
  });
});
