// This file is in the entry point in your webpack config.
import { forecastFetch } from "./forecastFetch";
import { renderDay } from "./renderDay";
import { renderHour } from "./renderHour";

import "./styles.scss";
import "./oprnrv.scss";
import { renderCurrentLocationWeather } from "./renderCurrentLocationWeather";

const futureWrapper = document.getElementById("future");
const dailyHideBtn = document.getElementById("hide-daily-btn");
const hourlyForecastWrapper = document.getElementById("hourly-forecast");
const currentWeatherWrapper = document.getElementById("current");
const locationSelect = document.getElementById("weather-location");
const hourlyHideBtn = document.getElementById("hide-hourly-btn");

function fetchAndRenderWeatherFor(location) {
  futureWrapper.innerText = "Loading...";
  hourlyForecastWrapper.innerText = "Loading...";
  currentWeatherWrapper.innerText = "Loading...";

  forecastFetch(location).then(
    ({ dailyForecast, hourlyForecast, currentWeather }) => {
      futureWrapper.innerHTML = dailyForecast
        .map(day => renderDay(day))
        .join("");
      hourlyForecastWrapper.innerHTML = hourlyForecast
        .map(hour => renderHour(hour))
        .join("");
      currentWeatherWrapper.innerHTML = renderCurrentLocationWeather(
        Object.assign({ location }, currentWeather)
      );
    }
  );
}

fetchAndRenderWeatherFor("denver,co");

locationSelect.addEventListener("change", ({ target: { value } }) => {
  fetchAndRenderWeatherFor(value);

});

function toogleButton(btn, wrapper, showText, hideText) {
  if (wrapper.classList.contains("hidden")) {
    btn.innerText = hideText;
    wrapper.classList.remove("hidden");
  } else {
    btn.innerText = showText;
    wrapper.classList.add("hidden");
  }
}

dailyHideBtn.addEventListener("click", () => {
  toogleButton(
    dailyHideBtn,
    futureWrapper,
    "Show daily data",
    "Hide daily data"
  );
});

hourlyHideBtn.addEventListener("click", () => {
  toogleButton(
    hourlyHideBtn,
    hourlyForecastWrapper,
    "Show hourly data",
    "Hide hourly data"
  );
});
