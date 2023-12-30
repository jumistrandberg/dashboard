document.addEventListener('DOMContentLoaded', () => {


// Get the elements 
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Get the base URL 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

// Function to get the API key 
async function getApiKey() {
    const response = await fetch('./apiKeys.json')
    if(response.ok) {
        const keyArray = await response.json(); 
        const weatherApiKey = keyArray[0].weather;
        return weatherApiKey;
    } else {
        console.log(`Error: ${response.status}`);
    }
}

// Function to get the weather and display it on dashboard 
async function checkWeather(city) {
    //Get the key and URL 
    const apiKey = await getApiKey(); 
    console.log(apiKey);
    
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    console.log(response);
    
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png"
    }
    
}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
    searchBox.value = ""
});

getApiKey();

})
