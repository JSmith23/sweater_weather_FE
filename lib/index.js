// This file is in the entry point in your webpack config.
import { forecastFetch } from "./forecastFetch";
import { renderDay } from "./renderDay";
import { renderHour } from "./renderHour";

import "./styles.scss";
import "./oprnrv.scss";

const futureWrapper = document.getElementById("future");
const hourlyForecastWrapper = document.getElementById("hourly-forecast");

forecastFetch().then(({ dailyForecast, hourlyForecast }) => {
  futureWrapper.innerHTML = dailyForecast.map(day => renderDay(day)).join("");
  hourlyForecastWrapper.innerHTML = hourlyForecast
    .map(hour => renderHour(hour))
    .join("");
});
