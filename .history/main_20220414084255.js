const search = document.querySelector("input");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const deg = document.querySelector(".deg p");
const status = document.querySelector(".status");
const distance = document.querySelector(".distance value");
const speed = document.querySelector(".speed value");
const humidity = document.querySelector(".humidity value");

async function changeWeatherUI() {
  let a = search.value.trim();
  console.log(a);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=7db7f7f1454b662870a48eb474a823f9`;

  let data = await fetch(apiUrl).then((res) => res.json());
  console.log(data);
}

changeWeatherUI();
