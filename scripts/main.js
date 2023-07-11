const API_KEY = "1c5a98bf8b524cf5bb3185319230507";
const API_URL = "http://api.weatherapi.com/v1/current.json?";
const locationName = document.getElementById("get_location");


function displayWeather(weather) {
    document.getElementById("weather").innerHTML = weather;
} 

function displayCity() {
    document.getElementById("city").innerHTML = locationName.q.value;
}

function concatURL() {
    return (API_URL + "key=" + API_KEY + "&q=" + locationName.q.value);
}

async function getWeather(url) {
    const response = await fetch(url);
    let weatherReport = await response.json()

    return weatherReport.current.condition.text;
}

async function returnSearchResult() {
    //let location = locationName.q.value;
    let url = concatURL();
    let weather = await getWeather(url);

    displayWeather(weather);
    displayCity();
}