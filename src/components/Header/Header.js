import React, { Component } from "react";
import DateCounter from "./DateWidget";
import WeatherWidget from "./WeatherWidget";
class Header extends Component {
  render() {
    return (
      <main className="header">
       <div className="main-title">
        
          <h1>Pineapple Daily</h1>
      
        </div>
        <DateCounter className="date-counter" />
        <WeatherWidget
          className="weather-widget"
          weather={this.props.weather}
        />
         </main>
    );
  }
}

export default Header;
