import React from "react";
import styled from "styled-components";
import ForecastRow from "./ForecastRow";

const Table = styled.div`
  background-color: #f0eff0;
  display: flex;
  flex-direction: column;
`;

const ForecastTable = () => {
  return (
    <Table>
      <ForecastRow />
      <ForecastRow />
      <ForecastRow />
      <ForecastRow />
      <ForecastRow />
      <ForecastRow />
    </Table>
  );
};

export default ForecastTable;
