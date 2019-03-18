function buildApiUrl(location) {
  return `https://protected-eyrie-74158.herokuapp.com/api/v1/forecast?location=${location}`;
}


export function forecastFetch(location) {
  return fetch(buildApiUrl(location))
    .then(response => response.json())
    .then(json => {
      const attributes = json.data.attributes;
      return {
        dailyForecast: attributes.daily_forecast,
        hourlyForecast: attributes.hourly_forecast.slice(0, 12),
        currentWeather: attributes.current
      };
    });
}
