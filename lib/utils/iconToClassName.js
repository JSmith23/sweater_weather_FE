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

export function iconToClassName(icon) {
  switch (icon) {
    case "clear-day":
      return "sunny";
    case "rain":
      return "rain";
    case "snow":
      return "snow";
    case "sleet":
      return "sleet";
    case "fog":
      return "fog";
    case "cloudy":
      return "mostlycloudy";
    case "partly-cloudy-night":
      return "partlycloudy";
    case "partly-cloudy-day":
      return "partlycloudy";
    default:
      return "partlysunny";
  }
}
