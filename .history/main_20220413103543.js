const search = document.querySelector(".header input");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const deg = document.querySelector(".deg p");
const status = document.querySelector(".status");
const distance = document.querySelector(".distance value");
const speed = document.querySelector(".speed value");
const humidity = document.querySelector(".humidity value");

function changeWeatherUI() {
  search.value.trim();
}
