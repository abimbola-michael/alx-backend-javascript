const calculateNumber = require("./0-calcul");
const assert = require("assert");

describe("calculateNumber", () => {
  it("no rounding", () => {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it("a rounding", () => {
    assert.equal(calculateNumber(1.5, 3), 5);
  });

  it("b rounding", () => {
    assert.equal(calculateNumber(1, 3.5), 5);
  });

  it("both rounding", () => {
    assert.equal(calculateNumber(1.5, 3.5), 6);
  });
});
