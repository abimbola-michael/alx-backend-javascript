const calculateNumber = require("./2-calcul_chai");
const { expect } = require("chai");
describe("calculateNumber", () => {
  it("sum", () => {
    expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
  });
  it("subtract", () => {
    expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
  });
  it("divide without b of 0", () => {
    expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
  });
  it("divide with b of 0", () => {
    expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error");
  });
});
