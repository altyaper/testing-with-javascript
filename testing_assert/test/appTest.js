const assert = require('assert');
const calculator = require('../app');


//// Calculator /////

// 5 + 5 = 10
assert.ok(calculator.add(5, 5) == 10);

// 5 + 'texto' = throw Error
assert.throws( function() {
  calculator.add(5, 'texto');
} , Error);

// 0.1 + 0.2 = 0.3
assert.equal(calculator.add(0.1, 0.2), 0.3);
