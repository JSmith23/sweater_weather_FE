// This file is in the entry point in your webpack config.
import { forecastFetch } from "./forecastFetch";
import { renderDay } from "./renderDay";

import "./styles.scss";
import "./oprnrv.scss";

const futureWrapper = document.getElementById("future");


forecastFetch().then(days => {
  futureWrapper.innerHTML = days.map(day => renderDay(day)).join();
});
