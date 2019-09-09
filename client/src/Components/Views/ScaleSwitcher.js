import React from "react";
import styled from "styled-components";
import TemperatureDisplay from "./TemperatureDisplay";

const ToggleDiv = styled.div`
  flex-basis: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 6%;
`;

const ScaleSwitcher = () => {
  return (
    <ToggleDiv>
      <TemperatureDisplay value={""} scale="F" size={3.3} color="whitesmoke" />
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <TemperatureDisplay value={""} size={3.3} scale="C" color="whitesmoke" />
    </ToggleDiv>
  );
};

export default ScaleSwitcher;
