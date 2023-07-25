const API_KEY = "1c5a98bf8b524cf5bb3185319230507";
const API_URL = "http://api.weatherapi.com/v1/current.json?";

const locationName = document.getElementById("get_location");

// considering turning weather into an object > const weather = {forecast:"", icon:"", temperature:""}

function displayResult(weather) {
    document.getElementById("forecast").innerHTML = weather.current.condition.text;
    document.getElementById("country").innerHTML = weather.location.country;
    document.getElementById("location").innerHTML = weather.location.name;
    document.getElementById("temperature").innerHTML = `${weather.current.temp_c}°`;
    document.getElementById("feels_like").innerHTML = `Feels like: ${weather.current.feelslike_c}°`;
    document.getElementById("weather_icon").src = `https:${weather.current.condition.icon}`;
    document.getElementById("error_message").innerHTML = "";
}

function displayError(error_message) {
    document.getElementById("error_message").innerHTML = error_message;
    document.getElementById("forecast").innerHTML = "";
    document.getElementById("country").innerHTML = "";
    document.getElementById("location").innerHTML = "";
    document.getElementById("feels_like").innerHTML = "";
    document.getElementById("temperature").innerHTML = "";
    document.getElementById("weather_icon").src = "";
}

function createURL() {
    return (`${API_URL}key=${API_KEY}&q=${locationName.q.value}`);
}

async function getWeather(url) {
    const response = await fetch(url);
    const weatherReport = await response.json()

    return weatherReport
}

function isValidWeatherReport(weatherReport) {
    return (weatherReport.current !== undefined)
}

async function returnSearchResult() {
    const url = createURL();
    const weather = await getWeather(url);

    if (isValidWeatherReport(weather)) {
        displayResult(weather);
    }

    switch(weather.error.code) {
        case 1003:
            displayError("Search bar must have input");
            break;
        case 1006:
            displayError("Please enter a valid location");
            break;
        case 9001:
            displayError("Too many locations: please reduce the number of locations");
            break;
        default:
            displayError("Something wrong happened on our side, please try again later.");
    }
}