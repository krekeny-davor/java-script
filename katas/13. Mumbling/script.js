// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function mumbling(letters) {
  const arr = letters.toUpperCase().split("");
  const mapped = arr.map((c, i) => c + c.toLowerCase().repeat(i));
  return mapped.join("-");
}

console.log(mumbling("aBcd"));
console.log(mumbling("RqaEzty"));
console.log(mumbling("cwAt"));
