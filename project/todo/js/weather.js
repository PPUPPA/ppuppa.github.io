const API_KEY = "77372593c64fd4bc7644ca522fef0878";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather .weather-state");
    const temperature = document.querySelector("#weather .weather-temp");
    const city = document.querySelector("#weather .weather-locate");
    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
    temperature.innerText = `${data.main.temp}°C`;
  });
}

function onGeoError(){
  alert("위치 권한이 없어 정보가 제공되지 않습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);