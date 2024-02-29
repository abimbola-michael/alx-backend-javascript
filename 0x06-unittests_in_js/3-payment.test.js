const { spy } = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
describe("sendPaymentRequestToApi", () => {
  let calculateNumberSpy;
  beforeEach(() => {
    calculateNumberSpy = spy(Utils, "calculateNumber");
  });
  afterEach(() => {
    calculateNumberSpy.restore();
  });
  it("checking if called with correct arguments", () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
  });
});
