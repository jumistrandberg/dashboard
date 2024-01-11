document.addEventListener("DOMContentLoaded", () => {
  checkWeather("Malmo");

  // Get the elements
  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");
  const weatherIcon = document.querySelector(".weather-icon");

  // Get the base URL
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

  // Store the response from the fetch
  let response;
  // Store the array key
  let keyArray;
  let weatherApiKey;

  // Store the JSON response
  let data;

  // Function to get the API key
  async function getApiKey() {
    response = await fetch("./apiKeys.json");
    if (response.ok) {
      keyArray = await response.json();
      weatherApiKey = keyArray[0].weather;
      return weatherApiKey;
    } else {
      console.log(`Error: ${response.status}`);
    }
  }

  // Function to get the weather and display it on dashboard
  async function checkWeather(city) {
    //Get the key and URL
    apiKey = await getApiKey();
    response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    data = await response.json();

    displayData();
  }

  // Function to set the data on UI
  async function displayData() {
    // Change the HTML elements based on the data from the weather API
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    console.log(data.weather);

    // Check which weather and pick right img to show
    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "imgs/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "imgs/clear.png";
        break;
      case "Drizzle":
        weatherIcon.src = "imgs/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "imgs/mist.png";
        break;
      case "Snow":
        weatherIcon.src = "imgs/snow.png";
        break;

      default:
        weatherIcon.src = "";
        break;
    }
  }

  // Listen for clicks on search for the city
  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    searchBox.value = "";
  });

  getApiKey();
});

// // Function to get users location to display local weather
// function userLocation() {
//     navigator.geolocation.getCurrentPosition(
//         async function(position) {
//             const long = position.coords.longitude;
//             const lat = position.coords.latitude;

//             // Get the city based on coords
//             const apiKey = getApiKey();
//             const reverseGeoUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=${apiKey}`;

//             try {
//                 const response = await fetch(reverseGeoUrl);
//                 if(response.ok) {
//                     const data = await response.json;
//                     const city = data[0].name;

//                     checkWeather(city);
//                 } else {
//                     console.log(`Error: ${response.status}`);
//                 }
//             } catch {
//                 console.log(`Error ${response.status}`)
//             }
//         }
//     )
// }

// userLocation();
