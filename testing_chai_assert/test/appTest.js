const assert = require('chai').assert;


describe("Calculator tests", function() {

  it("Add should return 5 when we add 2 + 3", function() {
    result = calculator.add(2, 3);
    assert(result === 5);
  });

  it("Add should throw an error when we pass NaN", function() {
    assert.throws(() => {
      calculator.add(2, "text");
    }, Error);
  });

  it("Add should return a one decimal float", function() {
    result = calculator.add(2, 3);
    expect(result).to.equal(5);
  });

});
