
const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai)
const {todosProdutos,
  idReturn,
  returnQuery,
  menssageError,}= require('../../mocks/products.mock');
const productControlle = require('../../../src/controllers/product.controller');
const productService = require('../../../src/services/product.service');
describe('Testes da camada Controller dos Produtos.', function () {
  afterEach(sinon.restore);

  it('Verifica se é possível exibir todos os produtos;', async function () {
    const req = {};
    const res = {};
    sinon.stub(productService, 'getAllProducts').resolves({ type: null, message: todosProdutos });
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productControlle.products(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(todosProdutos);
  });

  it('Verifica se é possível exibir um produto pelo id;', async function () {
    const req = { params: { id: 1 } };
    const res = {};
    sinon.stub(productService, 'getProductById').resolves({ type: null, message: idReturn });
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productControlle.productById(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(idReturn);
  }
  );

  it('Verifica se exibe o produto do ID requisitado;', async function () {
    const req = { params: { id: 1 } };
    const res = {};
    sinon.stub(productService, 'getProductById').resolves({ type: null, message: idReturn });
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productControlle.productById(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(idReturn);
  });
});
