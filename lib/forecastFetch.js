const API_URL = "http://localhost:3000/api/v1/forecast?location=denver,co";

export function forecastFetch() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(json => json.data.attributes.daily_forecast);
}
