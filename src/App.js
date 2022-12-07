import React from "react";
import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <div className="row">
            <div className="col-md-6">
              <Search />
              <Current />
            </div>
            <div className="col-md-6">
              <Forecast />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
