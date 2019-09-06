import { gql } from "apollo-boost";

const GET_WEATHER_BY_CITY = gql`
  {
    getForecastByCity($city:String!) {
      name
      country
      weather {
        icon
      }
    }
  }
`;
