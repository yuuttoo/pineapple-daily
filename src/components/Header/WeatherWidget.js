import React, { Component } from "react";

class WeatherWidget extends Component {
  render() {
    const {
      location,
      currentTemp,
      minTemp,
      maxTemp,
      description
    } = this.props.weather;
    return (
      <div className="weather-widget-container">
        <p>
          {location} <br />
          現在溫度: {currentTemp}&#8451;   {description}
          <br /> 今日最低溫: {""} {minTemp}&#8451; {""}
          最高溫: {""}
          {maxTemp}
          &#8451;
        </p>
      </div>
    );
  }
}

export default WeatherWidget;
