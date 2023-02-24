const sinon = require("sinon");
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');


describe("Send pay to API", () => {
  it("should ensure sum output is same", () => {
    const uncleSam = sinon.spy(console);
    const breezy = sinon.stub(Utils, 'log');
    
    breezy.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(breezy.calledWith('SUM', 100, 20)).to.be.true;
    expect(breezy.callCount).to.be.equal(1);
    expect(uncleSam.log.calledWith('The total is: 10')).to.be.true;
    expect(uncleSam.log.callCount).to.be.equal(1);
    breezy.restore();
    uncleSam.log.restore();
  });
});