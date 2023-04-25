// In this little assignment you are given a string of
// space separated numbers, and have to return the highest
// and lowest number.

function highAndLow(numbers) {
  const arr = numbers.split(" ");
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const minStr = min.toString();
  const maxStr = max.toString();

  let result = maxStr + " " + minStr;

  return result;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
