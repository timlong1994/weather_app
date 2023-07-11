const API_KEY = "1c5a98bf8b524cf5bb3185319230507";
const API_URL = "http://api.weatherapi.com/v1/current.json?";

async function displayWeather(weatherReport) {
    document.getElementById("weather").innerHTML = weatherReport;
} 

function concatURL(city) {
    return API_URL.concat("key=", API_KEY, "&q=", city);
}

async function getweather(url) {
    const response = await fetch(url);
    let weatherReport = await response.json();
    
    displayWeather(weatherReport.current.condition.text)
}

async function getWeather(event) {
    let location = locationName.q.value;
    let url = await concatURL(location);
    getweather(url);
    event.preventDefault();
}
const locationName = document.getElementById("get_location");
locationName.addEventListener("submit", getWeather);
