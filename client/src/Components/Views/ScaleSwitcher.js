import React from "react";
import styled from "styled-components";
import TemperatureDisplay from "./TemperatureDisplay";
import gql from "graphql-tag";
import { useApolloClient, useQuery } from "@apollo/react-hooks";

const ToggleDiv = styled.div`
  flex-basis: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10%;
`;

const GET_SCALE = gql`
  {
    scale @client
  }
`;

const ScaleSwitcher = props => {
  const { data, error } = useQuery(GET_SCALE);
  const client = useApolloClient();

  const onScaleToggle = event => {
    let scale = "F";
    if (event.target.checked) {
      scale = "C";
    }
    client.writeData({ data: { scale: scale } });
  };

  const scaleBool = data.scale == "F" ? false : true;

  return (
    <ToggleDiv>
      <TemperatureDisplay value={""} scale="F" size={3.3} color="whitesmoke" />
      <label class="switch">
        <input type="checkbox" checked={scaleBool} onChange={onScaleToggle} />
        <span class="slider round"></span>
      </label>
      <TemperatureDisplay value={""} size={3.3} scale="C" color="whitesmoke" />
    </ToggleDiv>
  );
};

export default ScaleSwitcher;
