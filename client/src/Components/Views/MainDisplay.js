import React, { Component, useState } from "react";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";
import Loader from "./Loader";
import TemperatureDisplay from "./TemperatureDisplay";
import ForecastTable from "./ForecastTable";

const GET_WEATHER_BY_CITY = gql`
  query GET_WEATHER_BY_CITY($city: String) {
    ForecastCity(city: $city) {
      name
      country
      weather {
        temp
        icon
        description
        windSpeed
        humidity
      }
    }
  }
`;

const MainDisplay = () => {
  const [location, setLocation] = useState("London");
  const [getForecast, { loading, error, data }] = useLazyQuery(GET_WEATHER_BY_CITY, { variables: { city: location } });

  if (error) return <p>Error....{console.log(error)}</p>;

  let name, country, weather, windSpeed, temp, icon, humidity, description;

  //GET ALL DATA OUT WHEN IT HAS FINISHED LOADING
  if (data && !loading) {
    ({ name, country, weather } = data.ForecastCity);
  }
  if (weather) {
    ({ windSpeed, temp, icon, humidity, description } = weather[0]);
  }

  return (
    <div className="display-grid">
      <Loader active={loading} />
      <div className="display-title">
        <h1>
          {name || "Enter a Search Location"} {country || ""}
        </h1>
      </div>
      <div className="display-data">
        <div className="temp-display">
          <i className="fa fa-cloud"></i>
          <TemperatureDisplay color="whitesmoke" size={5} value={100.23432} scale="F" />
        </div>
        <div className="input-display">
          <h1>{description}</h1>
          <div className="city-input">
            <form className="ui form" onSubmit={onSearchSubmit}>
              <input type="text" name="city" placeholder="Enter City Name..." />
            </form>
            <p>3:15PM</p>
          </div>
        </div>
      </div>
      <div className="display-icons">
        <div>{windSpeed}mph wind</div>
        <div>{humidity}% humidty</div>
        <div>6:57AM sunrise</div>
      </div>
      {/* <ForecastTable /> */}
    </div>
  );

  function onSearchSubmit(event) {
    event.preventDefault();
    const city = event.target.city.value;
    setLocation(city);
    getForecast();
  }
};

export default MainDisplay;
