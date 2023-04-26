const chai = require('chai');
const { expect } = chai
const sinon = require('sinon');
const productsModel = require('../../../models/product.model');
const connection = require('../../../models/connection');
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
    sinon.stub(connection, 'execute').resolves(idReturn);
    const produto = await productsModel.getProductById(1);
    expect(produto).to.be.deep.equal(idReturn);
  });
  // it('Verificando se o id é  valido.', async function () {
  //   sinon.stub(productsModel, 'getProductById').resolves(undefined);
  //   const res = { type: 404, message: 'Product not found' };
  //   const produto = await productsModel.getProductById(66);
  //   expect(produto).to.be.deep.equal(res);


  // });
});
