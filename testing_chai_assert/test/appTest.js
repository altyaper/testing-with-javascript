const assert = require('chai').assert;
const app = require('../app');

describe("Test for the main application", function() {

  it("should return true for palindoromes", function(done) {
    assert.isTrue(app.checkPalindrome("manam"));
    done();
  });

});
