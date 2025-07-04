/* video 32:47-
https://www.youtube.com/watch?v=Q1zCAteKg8I

https://openweathermap.org/weather-conditions
https://lorem-co-ltd.com/fetch-basic/


*/
"use strict";
const searchInput = document.querySelector('.search input');
const searchBtn =document.querySelector('.search button');
const img =document.querySelector('.icon');


async function getWeather(city){
    let res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=!CHANGEME!&units=metric`);
    if (res.status === 404) {
        document.querySelector('.error').style.display = "block";
        return; // Stop further execution if city not found
    } else if (!res.ok) {
        document.querySelector('.error').style.display = "block";
        return; // Handle other errors (e.g., 400, 500)
    } else {
        document.querySelector('.error').style.display = "none";
    }
    let data = await res.json();

    console.log(data);
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) +"°C"; // Math.round()引数として与えた数を四捨五入して、もっとも近似の整数を返します
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidityP").innerHTML = Math.round(data.main.humidity) +"%";
    document.querySelector(".windS").innerHTML = Math.round(data.wind.speed) +"km/h";

    if (data.weather[0].main == "Clear"){
        img.src = "./img/day_clear.png"
    } else if(data.weather[0].main == "Clouds"){
        img.src = "./img/day_partial_cloud.png"
    } else if(data.weather[0].main == "Rain"){
        img.src = "./img/rain.png"
    } else if(data.weather[0].main == "Thunderstorm"){
        img.src = "./img/thunder.png"
    } else if(data.weather[0].main == "Snow"){
        img.src = "./img/snow.png"
    } else if(data.weather[0].main == "Mist"){
        img.src = "./img/mist.png"
    } 
}

searchBtn.addEventListener('click',()=>{

    getWeather(searchInput.value);
})

