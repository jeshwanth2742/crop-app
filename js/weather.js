// weather.js

function getWeatherAlerts() {
    const crop = document.getElementById("crop").value;
    const month = document.getElementById("month").value;
    const resultDiv = document.getElementById("result");

    if(!crop || !month){
        resultDiv.innerText = "Please select crop and month.";
        return;
    }

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showAlerts, showError);
    } else {
        resultDiv.innerText = "Geolocation is not supported by this browser.";
    }
}

function showAlerts(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const crop = document.getElementById("crop").value;
    const month = document.getElementById("month").value;
    const resultDiv = document.getElementById("result");

    // Dummy weather data based on latitude/longitude for now
    const temp = Math.floor(20 + (lat%10)); // just for demo
    const humidity = Math.floor(40 + (lon%60));
    const rainfall = Math.floor(Math.random()*200);

    let alerts = `Weather update for your location (Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)})\nCrop: ${crop}, Month: ${month}\n\n`;

    // Temperature alerts
    if(temp < 10) alerts += "- Frost Alert!\n";
    else if(temp > 35) alerts += "- Heat Stress Warning!\n";
    else alerts += "- Temperature is normal.\n";

    // Rainfall alerts
    if(rainfall === 0) alerts += "- Irrigation needed.\n";
    else if(rainfall > 200) alerts += "- Flood warning!\n";
    else alerts += "- Rainfall is adequate.\n";

    // Humidity alerts
    if(humidity < 40) alerts += "- Low humidity, increase watering.\n";
    else if(humidity > 80) alerts += "- High humidity, check for fungal diseases.\n";
    else alerts += "- Humidity is normal.\n";

    resultDiv.innerText = alerts;
}

function showError(error){
    const resultDiv = document.getElementById("result");
    switch(error.code){
        case error.PERMISSION_DENIED:
            resultDiv.innerText = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            resultDiv.innerText = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            resultDiv.innerText = "The request to get user location timed out.";
            break;
        default:
            resultDiv.innerText = "An unknown error occurred.";
    }
}

