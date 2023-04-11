// TODO: Implement the oddNumbers function

function oddNumbers(num1, num2) {
  for (let i = num1; i < num2; i++) {
    if (i % 2 === 0) {
    } else {
      console.log(i);
    }
  }
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

//////////////////////////////////////////////////////////////////////////////////////////////

// TODO: Implement the charCount function

function charCount(word, charachter) {
  if (charachter.length !== 1) {
    return 0;
  }
  let count = 0;
  for (let index = 0; index < word.length; index++) {
    if (word[index].toLowerCase() === charachter.toLowerCase()) count++;
  }
  return count;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
