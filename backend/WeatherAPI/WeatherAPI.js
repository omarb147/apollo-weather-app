const { RESTDataSource } = require("apollo-datasource-rest");
const config = require("../config.json");

class WeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.apiID = config.OPEN_WEATHER_KEY;
    this.baseURL = "https://api.openweathermap.org/data/2.5/forecast";
  }

  willSendRequest(request) {
    if (!request.path.includes("sunrise")) {
      request.params.set("appid", this.apiID);
    }
  }

  didEncounterError(error) {
    console.log(error);
  }

  async getSunriseDetails(lat, lon) {
    const sunset = await this.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=today`);
    return sunset;
  }

  async getForecastByCity(city) {
    try {
      const data = await this.get(`/daily?q=${city}`);
      let results = await forecastReducer(data);
      let sunriseData = await this.getSunriseDetails(results.lat, results.lon);
      results["sunrise"] = sunriseData.results.sunrise;
      return results || {};
    } catch (error) {
      console.log(error);
      return {};
    }
  }

  async getForecastByLocation(lat, lon) {
    try {
      const data = await this.get(`/daily?lat=${lat}&lon=${lon}`);

      return forecastReducer(data) || {};
    } catch (error) {
      console.log(error);
      return {};
    }
  }
}

const forecastReducer = data => {
  const { name, country, coord } = data.city;
  const weather = data.list.map(forecast => {
    return {
      date: forecast.dt,
      temp: forecast.temp.day,
      lowTemp: forecast.temp.min,
      highTemp: forecast.temp.max,
      humidity: forecast.humidity,
      description: forecast.weather[0].description,
      icon: forecast.weather[0].id,
      windSpeed: forecast.speed
    };
  });

  const { lat, lon } = coord;
  return { name, country, lat, lon, weather };
};

module.exports = { WeatherAPI };
