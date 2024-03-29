const calculateNumber = require("./1-calcul");
const assert = require("assert");
describe("calculateNumber", () => {
  it("sum", () => {
    assert.equal(calculateNumber("SUM", 1.4, 4.5), 6);
  });
  it("subtract", () => {
    assert.equal(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
  });
  it("divide without b of 0", () => {
    assert.equal(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
  });
  it("divide with b of 0", () => {
    assert.equal(calculateNumber("DIVIDE", 1.4, 0), "Error");
  });
});
