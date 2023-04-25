// Your task is to make a function that can take any
// non-negative integer as an argument and return it
// with its digits in descending order. Essentially,
// rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(number) {
  const numStr = number.toString();
  const splitStr = numStr.split("");
  const sortedArr = splitStr.sort();
  const reversedArray = sortedArr.reverse();
  const finalArray = reversedArray.join("");
  const finalNumber = finalArray / 1;

  return finalNumber;
}

// Simple solution:
// return number.toString().split('').sort().reverse().join('');

console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));
console.log(descendingOrder(12345));
console.log(descendingOrder(1));
console.log(descendingOrder(0));
