
const API_URL =
  `https://protected-eyrie-74158.herokuapp.com/api/v1/forecast?location=denver,co`;

export function forecastFetch() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(json => {
      const attributes = json.data.attributes;
      return {
        dailyForecast: attributes.daily_forecast,
        hourlyForecast: attributes.hourly_forecast.slice(0, 12)
      };
    });
}
