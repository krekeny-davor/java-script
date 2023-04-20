// You are going to be given a word. Your job is to return
// the middle character of the word. If the word's
// length is odd, return the middle character. If the
// word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(word) {
  if (word.length % 2 === 0) {
    const middle = word.length / 2;
    return word[middle - 1] + word[middle];
  } else {
    const middle = word.length / 2 - 0.5;
    return word[middle];
  }
}

let word = "davor";

console.log(getMiddle(word));
