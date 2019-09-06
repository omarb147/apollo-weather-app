import React, { Component } from "react";
import "../index.css";
import Helmet from "react-helmet";
import MainDisplay from "./MainDisplay";

export class App extends Component {
  render() {
    return (
      <div className="main-app-row">
        <div className="main-app">
          <MainDisplay />
        </div>
      </div>
    );
  }
}

export default App;
