import React from "react";
import styled from "styled-components";
import TemperatureDisplay from "./TemperatureDisplay";
import PropTypes from "prop-types";

const TableRow = styled.div`
  display: flex;
  justify-content: space-around;
  color: #2b2b2b !important;
  padding: 10px;
`;

const Date = styled.div`
  color: #2b2b2b;
  font-size: 2em;
`;

const WeatherIcon = styled.div`
  color: #2b2b2b;
  font-size: 2em;
`;

const ForecastRow = ({ scale, value, icon, desc }) => {
  return (
    <TableRow>
      <Date>Sat</Date>
      <WeatherIcon>
        <i class="wi wi-night-sleet"></i>
      </WeatherIcon>
      <TemperatureDisplay size={2} scale="F" value={100.22} />
      <div>
        99
        <sup>
          <sup>o</sup>F
        </sup>
      </div>
      <div>sunny</div>
    </TableRow>
  );
};

ForecastRow.propTypes = {
  scale: PropTypes.string,
  value: PropTypes.number,
  icon: PropTypes.string,
  desc: PropTypes.string
};

export default ForecastRow;
