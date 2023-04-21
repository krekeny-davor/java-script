// Your task is to make a function that can take any
// non-negative integer as an argument and return it
// with its digits in descending order. Essentially,
// rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(number) {
  let string = number.toString();
  string = string.split("");
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    count++;
    return string[i] * count;
  }
  return string;
}

// console.log(descendingOrder(42145));
// console.log(descendingOrder(145263));
// console.log(descendingOrder(123456789));

console.log(descendingOrder(12345));
