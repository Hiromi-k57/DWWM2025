/* video 32:47-
https://www.youtube.com/watch?v=Q1zCAteKg8I

https://openweathermap.org/weather-conditions


*/
"use strict";
const searchInput = document.querySelector('.search input');
const searchBtn =document.querySelector('.search button');
const img =document.querySelector('.icon');


async function getWeather(City){
    let res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=beb758f15a9582c568ae6270960129e9&units=metric`);
    let data = await res.json();

    console.log(data);
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) +"°C"; // Math.round()shousuuten kirisute
    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".humidityP").innerHTML = Math.round(data.main.humidity) +"%";
    document.querySelector(".windS").innerHTML = Math.round(data.wind.speed) +"km/h";

    
    
}

searchBtn.addEventListener('click',()=>{

    getWeather(searchInput.value);
})

