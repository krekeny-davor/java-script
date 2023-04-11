// TODO: Implement the oddNumbers function

function oddNumbers(firstNum, secondNum) {
  // Check if both parameters are positive numbers
  if (
    firstNum < 0 ||
    secondNum < 0 ||
    typeof firstNum !== "number" ||
    typeof secondNum !== "number"
  ) {
    return "Please provide positive numbers as input.";
  }

  let oddNums = "";

  // Iterate over all numbers between first number and second number
  for (let i = firstNum; i <= secondNum; i++) {
    // Check if the current number is odd
    if (i % 2 !== 0) {
      // Add the current number to the string of odd numbers
      oddNums += i.toString() + ",";
    }
  }

  // Remove the last comma from the string and return the result
  return oddNums.slice(0, -1);
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
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === charachter.toLowerCase()) count++;
  }
  return count;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
