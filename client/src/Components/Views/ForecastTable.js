import React from "react";
import styled from "styled-components";
import ForecastRow from "./ForecastRow";
import { format, fromUnixTime } from "date-fns";

const Table = styled.div`
  background-color: #f0eff0;
  display: flex;
  flex-direction: column;
`;

const ForecastTable = ({ weather, scale }) => {
  return (
    <Table>
      {weather.map(forecast => (
        <ForecastRow
          date={format(fromUnixTime(forecast.date), "ccc")}
          scale={scale}
          icon={forecast.icon}
          desc={forecast.description}
          highTemp={forecast.highTemp}
          lowTemp={forecast.lowTemp}
        />
      ))}
    </Table>
  );
};

export default ForecastTable;
