/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const out = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      out.push('FizzBuzz');
    } else if (i % 3 === 0) {
      out.push('Fizz');
    } else if (i % 5 === 0) {
      out.push('Buzz');
    } else {
      out.push(String(i));
    }
  }
  return out;
};

const restult = fizzBuzz(1);
