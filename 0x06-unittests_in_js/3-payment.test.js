const sinon = require("sinon");
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');


describe("Send pay to API", () => {
  it("should ensure sum output is same", () => {
    const uncleSam = sinon.spy(Utils);
    
    sendPaymentRequestToApi(100, 20);
    expect(uncleSam.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(uncleSam.calculateNumber.callCount).to.be.equal(1)
    uncleSam.calculateNumber.restore();
  });
});