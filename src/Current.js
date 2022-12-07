import React from "react";
import "./Current.css";

export default function Current() {
  return (
    <div className="Current">
      <h1 id="city">
        {" "}
        Lublin, <span id="country">Poland</span>{" "}
      </h1>
      <h2>
        {" "}
        <span id="day">Sunday</span>{" "}
        <span id="time">
          18:30 <strong></strong>{" "}
        </span>
      </h2>
      <h3 id="description">Clouds -3°C</h3>

      <div className="row">
        <ul>
          <li>
            <span id="humidity"> 96</span> %
          </li>
          <li>
            <i className="fa-solid fa-wind"></i> <span id="wind">3</span> m/h
          </li>
        </ul>
      </div>
    </div>
  );
}
