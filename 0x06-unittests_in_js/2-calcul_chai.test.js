const calculateNumber = require('./2-calcul_chai')
let { expect } = require('chai');

describe('Tests for calculateNumber advanced', function () {
  describe('SUM condition', function () {
    it('should return 6', () => {
      expect(calculateNumber('SUM',1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT condition', function () {
    it('should return negative numbers', () => {
      expect(calculateNumber('SUBTRACT',1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE condition', function () {
    it('should return float', () => {
      expect(calculateNumber('DIVIDE',1.4, 4.5)).to.equal(0.2);
    });
  });

  describe('DIVIDE condition', function () {
    it('should return error', () => {
      expect(calculateNumber('DIVIDE',1.4, 0)).to.equal('Error');
    });
  });
});