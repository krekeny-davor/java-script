function WelcomeMsg(name) {
  return "Welcome " + name;
}

console.log(WelcomeMsg("Davor"));

function calcGrossPrice(price, taxRate) {
  return price + price * taxRate;
}

console.log(calcGrossPrice(200, 0.19));

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

function addPositive(num1, num2) {
  return num1 + num2;
}

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(Math.abs(3), Math.abs(-5)));
// result2 should be 8

console.log(addPositive(Math.abs(-1), Math.abs(-8)));
// result3 should be 9
