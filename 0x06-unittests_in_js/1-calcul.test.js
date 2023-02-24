const calculateNumber = require('./1-calcul')
let assert = require('assert');

describe('Tests for calculateNumber advanced', function () {
  describe('SUM condition', function () {
    it('6', () => {
      assert.strictEqual(calculateNumber('SUM',1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT condition', function () {
    it('-4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT',1.4, 4.5), -4);
    });
  });

  describe('DIVIDE condition', function () {
    it('0.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE',1.4, 4.5), 0.2);
    });
  });

  describe('DIVIDE condition', function () {
    it('Error', () => {
      assert.strictEqual(calculateNumber('DIVIDE',1.4, 0), 'Error');
    });
  });
});
