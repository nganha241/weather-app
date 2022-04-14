const search = document.querySelector("input");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const deg = document.querySelector(".deg p");
const sts = document.querySelector(".status");
const distance = document.querySelector(".distance .value");
const speed = document.querySelector(".speed .value");
const humidity = document.querySelector(".humidity .value");
const time = document.querySelector(".time");
const body = document.getElementsByTagName("body")[0];
const weather = document.querySelector(".weather");

async function changeWeatherUI(val) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=7db7f7f1454b662870a48eb474a823f9`;

  let data = await fetch(apiUrl).then((res) => res.json());

  city.innerText = data.name + " ,  ";
  country.innerText = data.sys.country;
  deg.innerText = Math.round(data.main.temp - 273.15) + "<sup>o</sup>" + " C";
  sts.innerText = data.weather[0].main;
  distance.innerText = data.visibility + " (m)";
  speed.innerText = data.wind.speed + " (m/s)";
  humidity.innerText = data.main.humidity + " %";
  time.innerText = new Date().toLocaleDateString("pt-PT");

  if (Math.round(data.main.temp - 273.15) > 30) {
    body.classList.add("hot");
    weather.classList.add("hotcontent");
  }
}

search.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    let val = search.value.trim();
    changeWeatherUI(val);
  }
});

changeWeatherUI("Hanoi");
