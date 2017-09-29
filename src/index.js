module.exports = function multiply(first, second) {
    let result = [];
  let len = first.length + second.length - 1;
  first = String(first).split('').reverse();
  second = String(second).split('').reverse();
  for(let i = 0; i < len; i++) {
    result[i] = 0;
  }
  for(let i = 0; i < first.length; i++) {
    for(let j = 0; j < second.length; j++) {
      result[i + j] += +first[i] * +second[j];
    }
  }
  for(let i = 0; i < len - 1; i++) {
    result[i + 1] += Math.floor(result[i] / 10);
    result[i] %= 10;
  }
  return result.reverse().join('');
}
