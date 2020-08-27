/* Counting Sheep */

let input = 3;

const numberOfSheep = function(input) {
  //Base case
  if (input === 0) {
    return input + ": All sheep jumped over the fence";
  }
  // General case
  return "Another sheep jumps over the fence" + numberOfSheep(input - 1);
};
console.log(numberOfSheep(3));

/* Power Calculator */

const powerCalculator = function(base, exponent) {
  if (exponent < 0) {
    return "exponent should be >= 0";
  }
  // Base
  if (exponent === 1) {
    return base;
  }
  // General case
  return base * powerCalculator(base, exponent - 1);
};

console.log(powerCalculator(10,-2));

/* Reverse String */

const reverseString = function(string) {
  if (string.length === 1) {
    return string;
  }
  return string.slice(-1) + reverseString(string.slice(0, -1));
};

let string = "Howdy";
console.log(reverseString(string));

/* nth Triangular Number */

const nth = function(nDots) {
  if (nDots === 1) {
    return nDots;
  }
  return nDots + nth(nDots - 1);
};

console.log(nth(4));

/* String Splitter */

function stringSplitter(string, splitter, arr = []) {
    if (string.indexOf(splitter) === -1 || string.length <= 0) {
        arr.push(string);
        return arr;
    } else if (string.indexOf(splitter) !== -1) {
        arr.push(string.substring(0, string.indexOf(splitter)));
        return stringSplitter(string.substring(string.indexOf(splitter) + 1), splitter, arr);
    }
}

console.log(stringSplitter('02/20/2020', '/'));

/* Fibonnaci */

const fibonacci = function(num) {
  if (num <= 0) {
    return "Please enter a number greater than 0";
  }
  if (num === 1) {
    return 1;
  }
  if (num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(7));
