import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div ClassName="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="Submit" value="Search" className="btn-btn-primary" />
          </div>
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
          6 °C
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
