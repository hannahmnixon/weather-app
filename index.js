/// Date ///
let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let formatDate = `${day}, ${hours}:${minutes}`;

document.querySelector(".day").innerHTML = formatDate;

/// Search City ///
function logMainTemp(response) {
  let temp = document.querySelector(".temp");
  let mainTemp = Math.round(response.data.main.temp);
  temp.innerHTML = `${mainTemp}°`;
}

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");
  let selectedCity = document.querySelector("h1");
  selectedCity.innerHTML = `${input.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=a6ff4b7a9b12bc3ba444e702f94356c3&units=metric`;
  axios.get(apiUrl).then(logMainTemp);
}
let cities = document.querySelector(".search");
cities.addEventListener("search", searchCity);

function newCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let location = document.querySelector("h1");
  location.innerHTML = `${searchInput.value}`;
}

let citySearch = document.querySelector(".search");
citySearch.addEventListener("search", newCity);

/// Temp Converter ///
function logMainTempChange(response) {
  let temperature = document.querySelector(".temp");
  let mainTemperature = Math.round(response.data.main.temp);
  temperature.innerHTML = `${mainTemperature}°`;
  let fahrenheit = Math.round(response.data.main.temp * 1.8) + 32;
  document.querySelector("span.temp").innerHTML = `${fahrenheit}°`;
  document.querySelector("button.metric").innerHTML = "view in °C";
}

function newTemp(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=a6ff4b7a9b12bc3ba444e702f94356c3&units=metric`;
  axios.get(apiUrl).then(logMainTempChange);
}

let celciusOrFarenheit = document.querySelector("button.metric");
celciusOrFarenheit.addEventListener("click", newTemp);

/// Emoji Updates ///
