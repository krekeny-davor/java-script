// function oddNumbers(num1, num2) {
//   let result = "";

//   for (let i = num1; i <= num2; i++) {
//     if (i % 2 !== 0) {
//       result += i + ",";
//     }
//   }
//   return result.slice(0, -1);
// }

// // TODO: Implement the oddNumbers function

// console.log(oddNumbers(0, 4));
// // result should be: 1,3

// console.log(oddNumbers(10, 33));
// // result should be: 11,13,15,17,19,21,23,25,27,29,31,33

// console.log(oddNumbers(9, 12));
// // result should be: 9,11

// // function oddNumbers(num1, num2) {
// //   let oddNums = "";
// //   for (let i = num1; i <= num2; i++) {
// //     if (i % 2 !== 0) {
// //       oddNums += i + ",";
// //     }
// //   }
// //   return oddNums.slice(0, -1); // remove the last comma
// // }

function charCount(word, char) {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (char.length !== 1) {
      return "The char is to long!";
    } else {
      if (word[i] === char) {
        count++;
      }
    }
  }

  return count;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
