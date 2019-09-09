import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import "../lib/weather-icons-master/css/weather-icons.min.css";
import "../index.css";
import ForecastTable from "./Views/ForecastTable";
import ScaleSwitcher from "./Views/ScaleSwitcher";
import MainDisplay from "./Views/MainDisplay";

const AppDisplay = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  return (
    <AppDisplay className="main-app-row">
      <div className="main-app">
        <MainDisplay />
      </div>

      <ScaleSwitcher />
    </AppDisplay>
  );
};

export default App;
