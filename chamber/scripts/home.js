const spotlightContainer = document.querySelector("#spotlight-container");

async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const data = await response.json();

  const qualified = data.companies.filter(
    m => m.membershipLevel === 2 || m.membershipLevel === 3
  );

  const selected = qualified.sort(() => 0.5 - Math.random()).slice(0, 3);

  spotlightContainer.innerHTML = "";

  selected.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("spotlight-card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.membershipLevel === 3 ? "Gold Member" : "Silver Member"}</p>
    `;

    spotlightContainer.appendChild(card);
  });
}

loadSpotlights();

// WEATHER + 3-DAY FORECAST
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");

const apiKey = "7efbd8a73e2afe5dc07cbe5f89a826b8";
// Forecast endpoint (3-hour intervals)
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=6.43&lon=7.49&units=metric&appid=${apiKey}`;

async function getWeatherAndForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (!response.ok) throw new Error("Failed to fetch weather data");
    const data = await response.json();

    // --- Current Weather ---
    if (currentTemp) currentTemp.innerHTML = `${data.list[0].main.temp}&deg;C`;

    if (weatherIcon) {
      const iconCode = data.list[0].weather[0].icon;
      weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      weatherIcon.alt = data.list[0].weather[0].description;
    }

    if (captionDesc) captionDesc.textContent = data.list[0].weather[0].description;

    // --- 3-Day Forecast ---
    // OpenWeatherMap forecast = 3-hour intervals, 8 per day
    if (day1) day1.innerHTML = `${data.list[8].main.temp}&deg;C`;
    if (day2) day2.innerHTML = `${data.list[16].main.temp}&deg;C`;
    if (day3) day3.innerHTML = `${data.list[24].main.temp}&deg;C`;

  } catch (error) {
    console.error("Weather error:", error);
    if (currentTemp) currentTemp.innerHTML = "Weather unavailable";
    if (day1) day1.innerHTML = "-";
    if (day2) day2.innerHTML = "-";
    if (day3) day3.innerHTML = "-";
    if (weatherIcon) weatherIcon.src = "";
    if (captionDesc) captionDesc.textContent = "";
  }
}

// Call the function
getWeatherAndForecast();

