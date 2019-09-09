import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { weatherUnitConverter } from "../../lib/weatherUnitConverter";

const Temp = styled.div`
  color: ${props => props.color || "#2b2b2b"};
  font-size: ${props => props.size + "em" || "1em"};
`;
const Units = styled.sup`
  color: ${props => props.color || "#2b2b2b"};
  font-size: ${props => props.size + "em" || "1em"};
`;

const TemperatureDisplay = ({ value, scale, color, size }) => {
  return (
    <React.Fragment>
      <Temp size={size} color={color}>
        {weatherUnitConverter(value, scale)}
        <Units size={size * 0.13} color={color}>
          &#176;{scale}
        </Units>
      </Temp>
    </React.Fragment>
  );
};

TemperatureDisplay.propTypes = {
  value: PropTypes.number,
  scale: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number
};

export default TemperatureDisplay;
