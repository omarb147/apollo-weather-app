import React, { Component, useState } from "react";
import gql from "graphql-tag";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import Loader from "./Loader";
import TemperatureDisplay from "./TemperatureDisplay";
import ForecastTable from "./ForecastTable";
import { GET_SCALE } from "./ScaleSwitcher";

const GET_WEATHER_BY_CITY = gql`
  query GET_WEATHER_BY_CITY($city: String) {
    ForecastCity(city: $city) {
      name
      country
      sunrise
      weather {
        date
        temp
        icon
        description
        windSpeed
        humidity
        lowTemp
        highTemp
      }
    }
  }
`;

const MainDisplay = () => {
  const [location, setLocation] = useState("London");
  const scaleObj = useQuery(GET_SCALE);
  const [getForecast, { loading, error, data }] = useLazyQuery(GET_WEATHER_BY_CITY, { variables: { city: location } });

  if (error) return <p>Error....{console.log(error)}</p>;

  let name, country, weather, windSpeed, temp, icon, humidity, description, sunrise;
  const { scale } = scaleObj.data;

  //GET ALL DATA OUT WHEN IT HAS FINISHED LOADING
  if (data && !loading) {
    ({ name, country, weather, sunrise } = data.ForecastCity);
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
          {icon && <i class={`wi wi-owm-${icon}`}></i>}
          <TemperatureDisplay color="whitesmoke" size={5} value={temp} scale={scale} />
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
        <div>{sunrise}sunrise</div>
      </div>
      {weather && <ForecastTable scale={scale} weather={weather} />}
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
