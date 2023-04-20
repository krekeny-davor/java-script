// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function vowelCount(str) {
  const arr = str.toLowerCase().split("");
  const vowels = arr.filter(
    (char) =>
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
  );
  return vowels.length;
}

const string = "abracadabra";
console.log(vowelCount(string));

// Simple (better) solution:

// function vowelCount(str) {
//   const arr = str.toLowerCase().split("");
//   const vowels = ["a","e","i","o","u"]

//   const xxx = arr.filter(
//     (c) => vowels.includes(c)
//   );
//   return xxx.length;
// }

// const string = "abracadabra";
// console.log(vowelCount(string));
