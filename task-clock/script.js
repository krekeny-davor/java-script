const hoursHand = document.querySelector(".js-hours-hand");
const minutesHand = document.querySelector(".js-minutes-hand");
const secondsHand = document.querySelector(".js-seconds-hand");

const digitalHours = document.querySelector(".js-digital-hours");
const digitalMinutes = document.querySelector(".js-digital-minutes");
const digitalSeconds = document.querySelector(".js-digital-seconds");

const firstColon = document.querySelector(".js-blink-one");
const secondColon = document.querySelector(".js-blink-two");

document.addEventListener("DOMContentLoaded", function () {
  setInterval(updateClock, 1000);
  updateClock();
});

function updateClock() {
  const currentDate = new Date();
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();

  let formattedHours = currentHours;
  if (currentHours < 10) {
    formattedHours = `0${currentHours}`;
  }

  let formattedMinutes = currentMinutes;
  if (currentMinutes < 10) {
    formattedMinutes = `0${currentMinutes}`;
  }

  let formattedSeconds = currentSeconds;
  if (currentSeconds < 10) {
    formattedSeconds = `0${currentSeconds}`;
  }

  const hourDegrees = (formattedHours % 12) * 30 + currentMinutes / 2;
  const minuteDegrees = currentMinutes * 6;
  const secondDegrees = currentSeconds * 6;

  hoursHand.style.setProperty("--hours-hand", `${hourDegrees}deg`);
  minutesHand.style.setProperty("--minutes-hand", `${minuteDegrees}deg`);
  secondsHand.style.setProperty("--seconds-hand", `${secondDegrees}deg`);

  digitalHours.innerHTML = `${formattedHours}`;
  digitalMinutes.innerHTML = `${formattedMinutes}`;
  digitalSeconds.innerHTML = `${formattedSeconds}`;

  if (currentSeconds % 2 === 0) {
    firstColon.style.opacity = "0";
    secondColon.style.opacity = "0";
  } else {
    firstColon.style.opacity = "1";
    secondColon.style.opacity = "1";
  }
}
