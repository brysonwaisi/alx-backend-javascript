const request = require('request');
const { expect } = require('chai');

describe('Implement Integration testing', () => {
  describe('GET /', () => {
    it('Returns 200 OK | Welcome to the payment system', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      })
    })
  })
});