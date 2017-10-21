function checkPalindrome(text) {
  var arr = stringToArray(text);
  var reversed = reverseArray(arr);
  var finalString = arrayToString(reversed);
  return text === finalString;
}

function stringToArray(text) {
  return text.split('');
}

function reverseArray(arr) {
  return arr.reverse();
}

function arrayToString(arr) {
  return arr.join('');
}

module.exports = {
  checkPalindrome: checkPalindrome
}
