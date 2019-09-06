const resolvers = {
  Query: {
    getForecastByCity: async (_source, { city }, { dataSources }) => {
      let data = await dataSources.WeatherAPI.getForecastByCity(city);
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
    },
    getForecastByLocation: async (_source, { lat, lon }, { dataSources }) => {
      let data = await dataSources.WeatherAPI.getForecastByLocation(lat, lon);
      const { name, country } = data.city;
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
    }
  }
};

module.exports = { resolvers };
