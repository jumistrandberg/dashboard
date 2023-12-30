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

getApiKey();