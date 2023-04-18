// Very simple, given an integer or
// a floating-point number, find its opposite.

function opposite(number) {
  if (number === 0) {
    return "Number is zero";
  }
  return number * -1;
}

// Simple solution:
// function opposite(number) {
//   return(-number);
// }

console.log(opposite(-15));
console.log(opposite(5));
console.log(opposite(-35));
console.log(opposite(-5));
console.log(opposite(55));
console.log(opposite(0));
console.log(opposite(-2.455));
console.log(opposite(6.887));
