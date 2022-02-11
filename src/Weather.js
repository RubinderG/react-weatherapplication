import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div ClassName="row">
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand">LOGO</a>
              <form class="d-flex">
                <input
                  class="form-control me-2 w"
                  type="search"
                  placeholder="Enter a city..."
                  aria-label="Search"
                  autoFocus="on"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search{" "}
                </button>
              </form>
            </div>
          </nav>
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Thursday 11:11</li>
        <li>Clear Skys </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="clear skys"
          />
          <span className="temperature">6</span>{" "}
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity %</li>
            <li>Wind km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
