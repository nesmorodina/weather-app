import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast" id="forecast">
      <div id="weather-forecast-day">
        {" "}
        <span id="weather-forecast-temp-max"></span>
        <span id="weather-forecast-temp-min"></span>
        <span id="forecast-icon"></span>
        <ul>
          <li>Monday 0°C...-6°C</li>
          <li>Tuesday +2°C...-3°C</li>
          <li>Wednesday +4°C...-2°C</li>
          <li>Thursday +1°C...0°C</li>
          <li>Friday +1°C...-2°C</li>
          <li>Saturday +1°C...-1°C</li>
        </ul>
      </div>
    </div>
  );
}
