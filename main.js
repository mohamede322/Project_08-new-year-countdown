let newYearsDate = "1 Jan 2022";
let daysLeft = document.querySelector(".days");
let hoursLeft = document.querySelector(".hours");
let minutesLeft = document.querySelector(".minutes");
let secondsLeft = document.querySelector(".seconds");

let result = document.querySelector(".results");
let header = document.querySelector(".header");
let container = document.querySelector(".container");

setInterval(getDate, 1000);
getDate();
setInterval(addSnowFlakes, 100);

function getDate() {
  let wantedDate = new Date(newYearsDate);
  let currentDate = new Date();

  let totalSeconds = (wantedDate - currentDate) / 1000;

  days = Math.floor(totalSeconds / 3600 / 24);
  hours = Math.floor(totalSeconds / 3600) % 24;
  minutes = Math.floor(totalSeconds / 60) % 60;
  seconds = Math.floor(totalSeconds) % 60;

  days < 10 ? (daysLeft.innerHTML = `0${days}`) : (daysLeft.innerHTML = days);
  hours < 10
    ? (hoursLeft.innerHTML = `0${hours}`)
    : (hoursLeft.innerHTML = hours);
  minutes < 10
    ? (minutesLeft.innerHTML = `0${minutes}`)
    : (minutesLeft.innerHTML = minutes);
  seconds < 10
    ? (secondsLeft.innerHTML = `0${seconds}`)
    : (secondsLeft.innerHTML = seconds);

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    result.innerHTML = `<h1> ITS 2022 <br> HAPPY NEW YEAR </h1>`;
    header.style.display = "none";
  }
}

function addSnowFlakes() {
  let snowflake = document.createElement("i");
  snowflake.classList.add("fas");
  snowflake.classList.add("fa-snowflake");
  snowflake.style.left = `${Math.random() * container.clientWidth}px`;
  snowflake.style.opacity = Math.random();
  snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
  setTimeout(() => {
    snowflake.remove();
  }, Math.random() * 5000 + 5000);
  container.appendChild(snowflake);
}
