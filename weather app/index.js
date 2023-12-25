const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const img = document.querySelector("#img");

const key = "45bdf602e7ecddf36059aee970898cec";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function getWeather(cityName) {
  const response = await fetch(apiUrl + cityName + `&appid=${key}`);
  const result = await response.json();

  temp.innerHTML = Math.round(result.main.temp) + "°C";
  city.innerHTML = result.name;
  wind.innerHTML = result.wind.speed;
  humidity.innerHTML = result.main.humidity + "%";

  const weather = result.weather[0].main;

  if (weather === "Clouds") img.src = "images/clouds.png";
  else if (weather === "Clear") img.src = "images/clear.png";
  else if (weather === "Rain") img.src = "images/rain.png";
  else if (weather === "Wind") img.src = "images/wind.png";
  else if (weather === "Drizzle") img.src = "images/drizzle.png";
  else if (weather === "Mist") img.src = "images/mist.png";
  else if (weather === "Snow") img.src = "images/snow.png";

  document.querySelector(".weather").style.display = "block";
}

btn.addEventListener("click", () => {
  getWeather(input.value.trim());
});
