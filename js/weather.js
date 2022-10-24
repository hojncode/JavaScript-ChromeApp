function onGeoOk(position) {
    // console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.latitude;
    console.log("your location ", latitude, longitude)
}

function onGeoError() {
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);