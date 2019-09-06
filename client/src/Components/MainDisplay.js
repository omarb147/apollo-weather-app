import React, { Component } from "react";

export class MainDisplay extends Component {
  render() {
    return (
      <div className="display-grid">
        <div className="display-grid-item display-data">
          <div className="temp-display">
            <i className="fa fa-cloud"></i>
            <span>69</span>
            <sup>
              <sup>o</sup>F
            </sup>
          </div>
          <div className="input-display">
            <h1>Clear</h1>
            <div className="city-input">
              <input type="text" placeholder="Enter City Name..." />
              <p>3:15PM</p>
            </div>
          </div>
        </div>
        <div className="display-grid-item display-icons">
          <div>4mph wind</div>
          <div>68% humidty</div>
          <div>6:57AM sunrise</div>
        </div>
      </div>
    );
  }
}

export default MainDisplay;
