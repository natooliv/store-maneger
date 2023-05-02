const chai = require('chai');
const { expect } = chai
const sinon = require('sinon');
const salesModel = require('../../../src/models/salesProduct.model');
const connection = require('../../../src/models/connection');
const {salesMock, idReturn}= require('../../mocks/sales.mock');


describe('Testes da camada Model dos produtos.', function () {
  afterEach(sinon.restore);
  it('Verifica se todos os produtos estão sendo retornados.', async function () {
    sinon.stub(connection, 'execute').resolves([salesMock]);
    const produtos = await salesModel.getAllSales();
    expect(produtos).to.be.deep.equal(salesMock);
  });
  it('Verifica se o produto está sendo retornado pelo id.', async function () {
    sinon.stub(connection, 'execute').resolves(idReturn);
    const produto = await salesModel.findByIdSales(1);
    expect(produto).to.be.an('object');
  });
});
