const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const {salesMock, idReturn}= require('../../mocks/sales.mock');
const salesModel = require('../../../src/models/salesProduct.model');
const salesService = require('../../../src/services/salesProduct.service');


describe('Testes da camada Service dos produtos.', function () {
  afterEach(sinon.restore);
  it('Verifica se todos os produtos estão sendo retornados.', async function () {
    sinon.stub(salesModel, 'getAllSales').resolves(salesMock);
    const res = { type: null, message: salesMock };
    console.log(res);
    const produtos = await salesService.getAllSales();
    expect(produtos.message).to.be.deep.equal(res.message);
  });
  it('Verifica se o produto está sendo retornado pelo id.', async function () {
    sinon.stub(salesModel, 'findByIdSales').resolves(idReturn);
   const res = { type: null, message: idReturn };
  const produto = await salesService.findByIdSales(1);
  expect(produto).to.be.deep.equal(res);
 });

});
