const { gql } = require("apollo-server");

const typeDefs = gql`
  type Weather {
    date: String
    temp: Float
    lowTemp: Float
    highTemp: Float
    description: String
    icon: String
    windSpeed: Float
    humidity: Float
  }

  type City {
    name: String
    country: String
    sunrise: String
    lat: Float
    lon: Float
    weather: [Weather]
  }

  type Query {
    ForecastCity(city: String): City
    ForecastLocation(lat: Float, lon: Float): City
  }
`;

module.exports = { typeDefs };
