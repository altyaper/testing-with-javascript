function add(a, b) {
  if((typeof a !== 'number') || (typeof b !== 'number')) {
    throw Error('Both params should be numbers');
  }
  return (a + b).toFixed(1);
}

module.exports = {
  add: add
}
