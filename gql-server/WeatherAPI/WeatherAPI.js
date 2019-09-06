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
      console.log("working");
      const data = await this.get(`/daily?q=${city}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getForecastByLocation(lat, lon) {
    try {
      const data = await this.get(`/daily?lat=${lat}&lon=${lon}`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = { WeatherAPI };
