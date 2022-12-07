import React from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <button
          type="button"
          className="btn btn-light"
          id="current-location-button"
        >
          📍
        </button>

        <input
          type="search"
          placeholder="Search city..."
          className="search-form"
          autocomplete="off"
          id="city-input"
        />
      </form>
    </div>
  );
}
