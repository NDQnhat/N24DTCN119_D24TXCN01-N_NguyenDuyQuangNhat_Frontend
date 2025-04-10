const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};

let input = document.getElementById("cityInput");
let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");
// let description = document.getElementById("description");
let icon = document.getElementById("icon");
let btn = document.getElementById("btn");
let section = document.getElementById("weatherCard");

btn.addEventListener("click", function() {
    let data = input.value.trim();
    if (data in weatherData) {
    // if (weatherData.hasOwnProperty(data)) {
        city.innerHTML = data;
        temperature.innerHTML = weatherData[data].temperature;
        humidity.innerHTML = weatherData[data].humidity;
        windSpeed.innerHTML = weatherData[data].windSpeed;
        // description.innerHTML = weatherData[data].description;
        icon.innerHTML = weatherData[data].icon;
    } else {
        city.innerHTML = "Không tìm thấy dữ liệu thời tiết cho thành phố này.";
        temperature.innerHTML = "--";
        humidity.innerHTML = "--";
        windSpeed.innerHTML = "--";
        // description.innerHTML = "--";
        icon.innerHTML = "--";
    }
});