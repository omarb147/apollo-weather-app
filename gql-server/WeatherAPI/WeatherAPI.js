const { RESTDataSource } = require("apollo-datasource-rest");
const config = require("../config.json");

class WeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.apiID = config.OPEN_WEATHER_KEY;
    this.baseURL = "https://api.openweathermap.org/data/2.5/forecast";
  }

  willSendRequest(request) {
    request.params.set("appid", this.apiID);
  }

  didEncounterError(error) {
    console.log(error);
  }

  async getForecastByCity(city) {
    try {
      const data = await this.get(`/daily?q=${city}`);

      return forecastReducer(data) || {};
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
  const { name, country, lat, lon } = data.city;
  const weather = data.list.map(forecast => {
    return {
      date: forecast.dt,
      temp: forecast.temp.day,
      lowTemp: forecast.temp.min,
      highTemp: forecast.temp.max,
      humidity: forecast.humidity,
      description: forecast.weather[0].main,
      icon: forecast.weather[0].icon,
      windSpeed: forecast.speed
    };
  });
  return { name, country, lat, lon, weather };
};

module.exports = { WeatherAPI };
