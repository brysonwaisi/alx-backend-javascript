const getPaymentTokenFromAPI = require('./6-payment_token');
let { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  describe('arguments equal true', () => {
    it('Resolves to true', (done) => {
      getPaymentTokenFromAPI(true).then((res) => {
        expect(res).to.include({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
    })
  })
})