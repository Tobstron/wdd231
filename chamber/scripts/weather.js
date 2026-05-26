const apiKey = "874132cd9ba3f00d4027082eeedcfd3b";

const lat = 6.6018;
const lon = 3.3515;

const url =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {

    const response = await fetch(url);

    const data = await response.json();

    document.getElementById("temp").textContent =
    `Temperature: ${data.list[0].main.temp}°C`;

    document.getElementById("description").textContent =
    data.list[0].weather[0].description;

    const forecast = document.getElementById("forecast");

    forecast.innerHTML = `
        <p>Tomorrow: ${data.list[8].main.temp}°C</p>
        <p>Day 2: ${data.list[16].main.temp}°C</p>
        <p>Day 3: ${data.list[24].main.temp}°C</p>
    `;
}

getWeather();