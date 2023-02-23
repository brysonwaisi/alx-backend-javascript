const calculateNumber = require('./0-calcul');
let assert = require('assert');

describe('Tests for calculateNumber', function () {
  describe('Sums two Integers', function () {
    it('should return integer', () => {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
  });

  describe('Sums float and Integer', () => {
    it('should return integer', () => {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    })
  });

  describe("Sums one float & one integer (round down):", function() {
    it('should return int', function() {
      assert.strictEqual(calculateNumber(1, 3.3), 4);
    });
  });
  describe("Sums one float & one int reversed:", function () {
    it('should return int', function () {
      assert.strictEqual(calculateNumber(3.7, 1), 5);
    });
  });

  describe('Sums two floating point numbers', () => {
    it('Should return integer', () => {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
  })

  describe('Sums two floating nums and with borderline', () => {
    it('Should return integer', () => {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6)
    })
  })
});