// .sunny,
// .mostlysunny,
// .partlycloudy,
// .mostlycloudy,
// .partlysunny,
// .cloudy,
// .fog,
// .hazy,
// .chancerain,
// .rain,
// .chancetstorms,
// .tstorms,
// .chancesleet,
// .sleet,
// .chanceflurries,
// .flurries,
// .chancesnow,
// .snow,
// .inner

function iconToClassName(icon) {
  return "snow";
}

export function renderDay({ day, icon, conditions, high, low }) {
  // TODO: use conditions instead of replacing icons text
  return `<div class="container">
      <h3 class="day">${day}</h3>
      <div class="weatherIcon">
        <div class="${iconToClassName(icon)}">
          <div class="inner"></div>
        </div>
      </div>
      <p class="conditions">${icon.replace(/-/g, " ")}</p>
      <p class="tempRange">
        <span class="high">${high}</span> | <span class="low">${low}</span>
      </p>
    </div>`;
}
