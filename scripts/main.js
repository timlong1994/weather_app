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

    try {
        return weatherReport.current.condition.text;
    } catch (undefined) {
        return weatherReport.error.code;
    }
}

async function returnSearchResult() {
    let url = concatURL();
    let weather = await getWeather(url);

    switch(weather) {
        case 1003:
            displayError("Search bar must have input");
            break;
        case 1006:
            displayError("Please enter a valid location");
            break;
        case 9001:
            displayError("Too many locations: please reduce the number of locations");
            break;
        case 1002:
        case 1005:
        case 2006:
        case 2007:
        case 2008:
        case 2009:
        case 9000:
        case 9999:
            displayError("We fucked up and are trying our best to fix it, please try again later");
            break;
        default:
            displayResult(weather);
    }
}