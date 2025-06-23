/* video 32:47-
https://www.youtube.com/watch?v=Q1zCAteKg8I

https://openweathermap.org/weather-conditions


*/
"use strict";
const searchInput = document.querySelector('.search input');
const searchBtn =document.querySelector('.search button');
const img =document.querySelector('.icon');


async function getWeather(city){
    let res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=beb758f15a9582c568ae6270960129e9&units=metric`);
    let data = await res.json();

    console.log(data);
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) +"°C"; // Math.round()引数として与えた数を四捨五入して、もっとも近似の整数を返します
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidityP").innerHTML = Math.round(data.main.humidity) +"%";
    document.querySelector(".windS").innerHTML = Math.round(data.wind.speed) +"km/h";

    if (data.weather[0].main == "clear"){
        image.src = "./img/day_clear.png"
    } else if(data.weather[0].main == "clouds"){
        image.src = "./img/day_partial_cloud.png"
    } else if(data.weather[0].description == "scattered clouds"){
        image.src = "./img/cloudy.png"
    } else if(data.weather[0].description == "broken clouds"){
        image.src = "./img/angry_clouds.png"
    } else if(data.weather[0].description == "shower rain"){
        image.src = "./img/rain.png"
    } else if(data.weather[0].description == "rain"){
        image.src = "./img/rain.png"
    } else if(data.weather[0].description == "thunderstorm"){
        image.src = "./img/thunder.png"
    } else if(data.weather[0].description == "snow"){
        image.src = "./img/snow.png"
    } else if(data.weather[0].description == "mist"){
        image.src = "./img/snow.png"
    } 
}

searchBtn.addEventListener('click',()=>{

    getWeather(searchInput.value);
})

