const API_KEY = "1c5a98bf8b524cf5bb3185319230507";
const API_URL = "http://api.weatherapi.com/v1/current.json?";

const locationName = document.getElementById("get_location");


function displayResult(weather) {
    document.getElementById("search_result").innerHTML = `It's ${weather} in ${locationName.q.value} right now`;
}

function displayError(error_message) {
    document.getElementById("search_result").innerHTML = error_message;
}

function concatURL() {
    return (`${API_URL}key=${API_KEY}&q=${locationName.q.value}`);
}

async function getWeather(url) {
    const response = await fetch(url);
    let weatherReport = await response.json()

    return weatherReport
}

function isValidWeatherReport(weatherReport) {
    return (weatherReport.current !== undefined)
}

async function returnSearchResult() {
    let url = concatURL();
    let weather = await getWeather(url);

    if (isValidWeatherReport(weather)) {
        displayResult(weather.current.condition.text);
    } else {
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
}







