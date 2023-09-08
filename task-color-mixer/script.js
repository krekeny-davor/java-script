const theBody = document.body;
const redColor = document.querySelector(".js-input-red");
const greenColor = document.querySelector(".js-input-green");
const blueColor = document.querySelector(".js-input-blue");
const hexCode = document.querySelector(".js-hex-code");

let newRedValue = 255;
let newGreenValue = 105;
let newBlueValue = 180;

theBody.style.setProperty("--red", newRedValue.toString());
theBody.style.setProperty("--green", newGreenValue.toString());
theBody.style.setProperty("--blue", newBlueValue.toString());
updateOutput();

redColor.addEventListener("input", () => {
  newRedValue = Math.round((redColor.value * 255) / 100);
  theBody.style.setProperty("--red", newRedValue.toString());
  rgbToHex(newRedValue);
  updateOutput();
});

greenColor.addEventListener("input", () => {
  newGreenValue = Math.round((greenColor.value * 255) / 100);
  theBody.style.setProperty("--green", newGreenValue.toString());
  rgbToHex(newGreenValue);
  updateOutput();
});

blueColor.addEventListener("input", () => {
  newBlueValue = Math.round((blueColor.value * 255) / 100);
  theBody.style.setProperty("--blue", newBlueValue.toString());
  rgbToHex(newBlueValue);
  updateOutput();
});

function rgbToHex(color) {
  color = Math.max(0, Math.min(255, color));
  const hexR = color.toString(16).padStart(2, "0");
  return hexR;
}

function updateOutput() {
  // Combine data from all event listeners
  const combinedData = `${rgbToHex(newRedValue)}${rgbToHex(
    newGreenValue
  )}${rgbToHex(newBlueValue)}`;

  // Update the HTML element with the combined data
  hexCode.textContent = `#${combinedData}`;
}
