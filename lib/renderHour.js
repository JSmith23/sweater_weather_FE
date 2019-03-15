import { iconToClassName } from "./utils/iconToClassName";

export function renderHour({ time, icon, temp }) {
  // TODO: use conditions instead of replacing icons text
  const timeText = new Date(time * 1000).toTimeString().split(" ")[0];

  return `<div class="hour-container">
      <h3 class="time">${timeText}</h3>
      <div class="weatherIcon">
        <div class="${iconToClassName(icon)}">
          <div class="inner"></div>
        </div>
      </div>
      <p class="conditions">${icon.replace(/-/g, " ")}</p>
      <p class="temp">${temp}</p>
    </div>`;
}
