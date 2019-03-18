import { iconToClassName } from "./utils/iconToClassName";

export function renderCurrentLocationWeather({
  location,
  icon,
  temperature,
  time,
  summary
}) {
  var timeString = new Date(time * 1000).toDateString();

  return `<h1 class="location">${location}</h1>
        <h2 class="date">${timeString}</h2>
        <div class="weatherIcon">
          <div class="${iconToClassName(icon)}">
            <div class="inner"></div>
          </div>
        </div>
        <p class="temp">${temperature}</p>
        <p class="conditions">${summary}</p>`;
}
