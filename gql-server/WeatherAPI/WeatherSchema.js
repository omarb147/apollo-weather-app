const { gql } = require("apollo-server");

const typeDefs = gql`
  type Weather {
    date: String
    temp: Float
    lowTemp: Float
    minTemp: Float
    description: String
    icon: String
    windSpeed: Float
    humidty: Float
  }

  type City {
    name: String
    country: String
    lat: Float
    lon: Float
    weather: [Weather]
  }

  type Query {
    getForecastByCity(city: String): City
    getForecastByLocation(lat: Float, lon: Float): City
  }
`;

module.exports = { typeDefs };
