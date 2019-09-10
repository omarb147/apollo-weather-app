const resolvers = {
  Query: {
    ForecastCity: async (_source, { city }, { dataSources }) => {
      let data = await dataSources.WeatherAPI.getForecastByCity(city);
      return data;
    },
    ForecastLocation: async (_source, { lat, lon }, { dataSources }) => {
      let data = await dataSources.WeatherAPI.getForecastByLocation(lat, lon);
      return data;
    }
  }
};

module.exports = { resolvers };
