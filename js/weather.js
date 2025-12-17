// 날씨

import { API_KEY } from "./config.js"

function onGeoOk(position){ 
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data=> {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        // city.innerHTML = data.name; // 위치
        if(data.name === "Kwangmyŏng"){
            city.innerHTML = "Seoul";
        } else{
            city.innerHTML = data.name;
        }
        weather.innerHTML = `${data.weather[0].main} · ${Math.round(data.main.temp)}°`
    })
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

/**
 * getCurrentPosition 특징
 * 인자로 2개의 함수를 받는다. (위치를 성공적으로 가져왔을 때 실행될 함수, 위치를 가져오지 못했을 때 실행될 함수)
 * 성공 시 위도(latitude) 와 경도(longitude) 값을 제공한다.
 */
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)