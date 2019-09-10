import React from "react";
import styled from "styled-components";
import TemperatureDisplay from "./TemperatureDisplay";
import PropTypes from "prop-types";
import format from "date-fns";

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: #2b2b2b !important;
  padding: 10px;
`;

const Date = styled.div`
  color: #2b2b2b;
  font-size: 1.2em;
  flex: 2;
`;

const WeatherIcon = styled(Date)`
  font-size: 2em;
`;

const Description = styled(Date)`
  flex: 3;
`;

const Temperature = styled(Date)`
  flex: 8;
  display: flex;
`;

const ForecastRow = ({ date, scale, value, icon, desc, highTemp, lowTemp }) => {
  return (
    <TableRow>
      <Date>{date}</Date>
      <WeatherIcon>
        <i class={`wi wi-owm-${icon}`}></i>
      </WeatherIcon>
      <Temperature>
        <TemperatureDisplay size={1} scale={scale} value={highTemp} />
        <TemperatureDisplay size={1} scale={scale} value={lowTemp} />
      </Temperature>
      <Description>{desc}</Description>
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
