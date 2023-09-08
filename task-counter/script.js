const counterContainer = document.querySelector(".counter-container");
let counter = document.querySelector(".counter");
let count = 0;

const bodyContainer = document.querySelector("body");

counterContainer.addEventListener("click", () => {
  if (count === 100) {
    count = 100;
  } else {
    count++;
  }

  counter.innerText = count;
  counterContainer.style.setProperty("--degree", count + "%");
});

bodyContainer.addEventListener("keydown", (event) => {
  if (event.key === " " || event.key === "Enter") {
    if (count === 100) {
      count = 100;
    } else {
      count++;
    }

    counter.innerText = count;
    counterContainer.style.setProperty("--degree", count + "%");
  }
});

const resetButton = document.querySelector(".reset-button");

resetButton.addEventListener("click", () => {
  count = 0;
  counter.innerText = count;
  counterContainer.style.setProperty("--degree", count + "%");
  resetButton.blur();
});

bodyContainer.addEventListener("keydown", (event) => {
  if (event.key === "Delete") {
    count = 0;
    counter.innerText = count;
    counterContainer.style.setProperty("--degree", count + "%");
  }
});
