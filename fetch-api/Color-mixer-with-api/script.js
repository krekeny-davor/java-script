const theBody = document.body;
const hexCode = document.querySelector(".js-hex-code");
const inputs = document.querySelectorAll(".js-input");
const randomColorButton = document.querySelector(".js-random-color-btn");

const color = {
  red: 0,
  green: 0,
  blue: 0,
};

document.addEventListener("DOMContentLoaded", fetchRandomColor);

randomColorButton.addEventListener("click", fetchRandomColor);

inputs.forEach((element) => {
  theBody.style.setProperty(`--${element.name}`, numToRgb(element.value));
  updateOutput();

  element.addEventListener("input", (event) => handleInput(event));
});

function handleInput(event) {
  /*const { value: inputValue, name: inputName } = event.target;*/
  /*upper code is tha same as the bottom*/
  const inputValue = event.target.value;
  const inputName = event.target.name;

  color[inputName] = numToRgb(inputValue);
  theBody.style.setProperty(`--${inputName}`, color[inputName].toString());
  updateOutput();
}

function numToRgb(value) {
  return Math.min(Math.round((value * 255) / 100), 255);
}

function rgbToHex(color) {
  color = Math.max(0, Math.min(255, color));
  const hexR = color.toString(16).padStart(2, "0");
  return hexR;
}

function updateOutput() {
  // Combine data from all event listeners
  const combinedData = `${rgbToHex(color.red)}${rgbToHex(
    color.green
  )}${rgbToHex(color.blue)}`;

  // Update the HTML element with the combined data
  hexCode.textContent = `#${combinedData}`;
}

function setCSSVariable(variableName, value) {
  theBody.style.setProperty(`--${variableName}`, value.toString());
}

function fetchRandomColor() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      hexCode.innerText = data.color;
      color.red = data.rgb.r;
      color.green = data.rgb.g;
      color.blue = data.rgb.b;

      setCSSVariable("red", color.red);
      setCSSVariable("green", color.green);
      setCSSVariable("blue", color.blue);

      // Convert color values back to percentage scale
      const redPercentage = Math.round((color.red / 255) * 100);
      const greenPercentage = Math.round((color.green / 255) * 100);
      const bluePercentage = Math.round((color.blue / 255) * 100);

      // Update the input values
      document.querySelector('input[name="red"]').value = redPercentage;
      document.querySelector('input[name="green"]').value = greenPercentage;
      document.querySelector('input[name="blue"]').value = bluePercentage;

      updateOutput();
    });
}
