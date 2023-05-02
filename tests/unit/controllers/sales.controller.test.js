
const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai)
const {salesMock, idReturn}= require('../../mocks/sales.mock');
const salesControlle = require('../../../src/controllers/salesProduct.controller');
const salesService = require('../../../src/services/salesProduct.service');

describe('Testes da camada Controller dos Produtos.', function () {
  afterEach(sinon.restore);

  it('Verifica se é possível exibir todos os produtos;', async function () {
    const req = {};
    const res = {};
    sinon.stub(salesService, 'getAllSales').resolves({ type: null, message: salesMock });
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await salesControlle.getAllSales(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(salesMock);
  });

  it('Verifica se é possível exibir um produto pelo id;', async function () {
    const req = { params: { id: 1 } };
    const res = {};
    sinon.stub(salesService, 'findByIdSales').resolves({ type: null, message: idReturn });
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await salesControlle.findByIdSales(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(idReturn);
  }
  );

  it('Verifica se exibe o produto do ID requisitado;', async function () {
    const req = { params: { id: 1 } };
    const res = {};
    sinon.stub(salesService, 'findByIdSales').resolves({ type: null, message: idReturn });
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await salesControlle.findByIdSales(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(idReturn);
  });
});
