function dateformatter(dt) {
  var options = { weekday: 'short', hour: 'numeric' };
  date_obj = new Date(dt)
  return date_obj.toLocaleTimeString("en-US", options);
}

// Declaring the variables
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var city = urlParams.get('fsearch');
if (city == null || city == '') {
  city = 'delhi';
}

let lon;
let lat;

let temperature = document.querySelector(".current-temperature");
// let summary = document.querySelector(".summary");
let loc = document.querySelector(".city-name");
let icon = document.querySelector(".weather-icon");
const kelvin = 273;
let dayTime1 = document.querySelector("#day-time-1");
let dayTime2 = document.querySelector("#day-time-2");
let dayTime3 = document.querySelector("#day-time-3");
let dayTime4 = document.querySelector("#day-time-4");
let dayTime5 = document.querySelector("#day-time-5");
let dayTime6 = document.querySelector("#day-time-6");
let conditions = document.querySelector("#conditions");
let feelslike = document.querySelector("#feels-like");
console.log(conditions.children[0].children[1].innerHTML);
// API ID
const api = "6d055e39ee237af35ca066f35474e9df";

// var city = 'mumbai';
const base1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`

fetch(base1)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    temperature.innerHTML = Math.round(data["main"]["temp"] - 273.15) + '°';
    loc.innerHTML = data["name"];
    feelslike.innerHTML = Math.round(data["main"]["feels_like"]-273.15) + '°';

    conditions.children[0].children[1].innerHTML = Math.round(data["wind"]["speed"]) + 'km/s';
    conditions.children[1].children[1].innerHTML = Math.round(data["main"]["humidity"]) + '%';
    conditions.children[2].children[1].innerHTML = Math.round(data["main"]["temp_max"] - 273.15) + '°';
    conditions.children[3].children[1].innerHTML = Math.round(data["main"]["temp_min"] - 273.15) + '°';



  })
// API URL
const base2 =
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}`;

// Calling the API
fetch(base2)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    d1 = data["list"][0]["dt_txt"];
    dayTime1.children[0].innerHTML = dateformatter(d1);
    t1 = Math.round(data["list"][0]["main"]["temp"] - 273.15);
    dayTime1.children[2].innerHTML = t1 + '°';

    d2 = data["list"][1]["dt_txt"];
    dayTime2.children[0].innerHTML = dateformatter(d2);
    t2 = Math.round(data["list"][1]["main"]["temp"] - 273.15);
    dayTime2.children[2].innerHTML = t2 + '°';

    d3 = data["list"][2]["dt_txt"];
    dayTime3.children[0].innerHTML = dateformatter(d3);
    t1 = Math.round(data["list"][2]["main"]["temp"] - 273.15);
    dayTime3.children[2].innerHTML = t1 + '°';

    d4 = data["list"][3]["dt_txt"];
    dayTime4.children[0].innerHTML = dateformatter(d4);
    t1 = Math.round(data["list"][3]["main"]["temp"] - 273.15);
    dayTime4.children[2].innerHTML = t1 + '°';

    d5 = data["list"][4]["dt_txt"];
    dayTime5.children[0].innerHTML = dateformatter(d5);
    t1 = Math.round(data["list"][4]["main"]["temp"] - 273.15);
    dayTime5.children[2].innerHTML = t1 + '°';

    d6 = data["list"][5]["dt_txt"];
    dayTime6.children[0].innerHTML = dateformatter(d6);
    t6 = Math.round(data["list"][5]["main"]["temp"] - 273.15);
    dayTime6.children[2].innerHTML = t6 + '°';


  });


const base3 = `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&appid=${api}`;
fetch(base3)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });