const calculateNumber = require("./0-calcul");
const assert = require("assert");

describe("calculateNumber", () => {
  it("no rounding", () => {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(30, 10), 40);
    assert.equal(calculateNumber(89, 2), 91);
  });

  it("a rounding", () => {
    assert.equal(calculateNumber(1.5, 3), 5);
    assert.equal(calculateNumber(1.4, 3), 4);
    assert.equal(calculateNumber(3.2, 3), 6);
  });

  it("b rounding", () => {
    assert.equal(calculateNumber(1, 3.5), 5);
    assert.equal(calculateNumber(6, 3.4), 9);
    assert.equal(calculateNumber(10, 4.2), 14);
  });

  it("both rounding", () => {
    assert.equal(calculateNumber(1.5, 3.5), 6);
    assert.equal(calculateNumber(11.4, 4.4), 15);
    assert.equal(calculateNumber(10.2, 4.2), 14);
  });
});
