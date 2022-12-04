
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = config.API_KEY;

function onGeoOk(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // console.log("your location ", latitude, longitude);
    const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    fetch(url).then(res => res.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        const temp = document.querySelector("#weather span:last-child")
        // temp.innerText = 
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} \n ${data.main.temp}℃`;
        })
}

function onGeoError() {
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk);
