const sinon = require('sinon');
let { expect } = require('chai');

const sendPaymentRequestToApi = require('./5-payment');

describe('Hooks', () => {
  let spyConsole;
  beforeEach(function() {
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(function() {
    spyConsole.restore();
  });

  it('logs The total is: 120', () => {
    sendPaymentRequestToApi(100, 20);

    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  });

  it('logs The total is: 20', () => {
    sendPaymentRequestToApi(10, 10);

    expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(spyConsole.calledOnce).to.be.true;
  })
});