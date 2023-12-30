const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getApiKey() {
  try {
    const response = await fetch("./apiKeys.json");
    if (response.ok) {
      const { weather } = await response.json();
      return weather; 
    } else {
      throw new Error(`Failed to fetch API key. Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching API key:", error);
  }
}

async function checkWeather(city) {
  try {
    const apiKey = await getApiKey();
    if (!apiKey) {
      console.error("API key is missing or invalid.");
      return;
    }

    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  } catch (error) {
    console.error("Error getting weather data:", error);
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
  searchBox.value = "";
});
