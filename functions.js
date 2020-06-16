/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Michael") logs "Hello Michael"
 */

function greet(name) {
  console.log(`Hello ${name}`);
}
greet("Yousif");

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if (n % 2 === 1) {
    return true;
  } else if (n % 2 === 0) {
    return false;
  } else {
    console.log(`Your number is neither even nor odd`);
  }
}

isOdd(5);
isOdd(4);
isOdd(4335434534);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */

function oddsSmallerThan(n) {
  if (isOdd(n) === true) {
    return (n - 1) / 2;
  } else if (isOdd(n) === false) {
    return n / 2;
  }
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */

function squareOrDouble(n) {
  if (isOdd(n) === true) {
    return n * n;
  } else if (isOdd(n) === false) {
    return n * 2;
  }
}
squareOrDouble(2);

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
