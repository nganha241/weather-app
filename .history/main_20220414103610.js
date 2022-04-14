const search = document.querySelector("input");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const deg = document.querySelector(".deg p");
const sts = document.querySelector(".status");
const distance = document.querySelector(".distance .value");
const speed = document.querySelector(".speed .value");
const humidity = document.querySelector(".humidity .value");
console.log(sts);
async function changeWeatherUI() {
  // const val = search.value.trim();
  const val = "Congo";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=7db7f7f1454b662870a48eb474a823f9`;

  let data = await fetch(apiUrl).then((res) => res.json());
  console.log(data);

  city.innerText = data.name + " ,  ";
  country.innerText = data.sys.country;
  deg.innerText = Math.round(data.main.temp - 273.15) + " C";
  sts.innerText = data.weather[0].main;
  distance.innerText = data.visibility + " (m)";
  speed.innerText = data.wind.speed + " (m/s)";
  humidity.innerText = data.main.humidity + " %";
}

changeWeatherUI();
