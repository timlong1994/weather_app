//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";


const API_KEY = "1c5a98bf8b524cf5bb3185319230507";

//testing stuff please ignore

const newCity = {
    firstName: "",
    cityName: document.getElementById("search_bar")
} 

let cityName = document.getElementById("sampleform");


newCity.firstName = document.getElementById("search_bar").onsubmit;

const sampleform = document.getElementById("search_bar");


async function printSearchResult(weatherReport) {
    document.getElementById("weather").innerHTML = weatherReport;
} 

function apiURL(city) {
    url = "http://api.weatherapi.com/v1/current.json?key=1c5a98bf8b524cf5bb3185319230507&q=";
    return url.concat(city);
}

async function getweather(url) {
    const response = await fetch(url);
    var data = await response.json();
    
    printSearchResult(data.current.condition.text)
}

async function getCityName() {
    console.log(document.getElementById("submit"));
    newCity.firstName = document.getElementById("search_bar").onsubmit;
    url = apiURL(newCity.firstName);

    const response = await fetch(url);
    var data = await response.json();
    const sampleform = await document.getElementById("fsearch_bar");
    console.log(data);
    printSearchResult(data.current.condition.text);
    console.log(sampleform.value);
}


async function getWeather(event) {
    let weather = city.q.value;
    let searchurl = await apiURL(weather);
    getweather(searchurl);
    event.preventDefault();
}
const city = document.getElementById("sampleform")
const comeon = document.getElementById("city");
city.addEventListener("submit", getWeather);
