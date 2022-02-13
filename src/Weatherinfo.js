import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div class="col-3">
          <br />
          <li className="date">
            <FormattedDate date={props.data.date} />
          </li>
          <h1>{props.data.city}</h1>
          <br />
          <ul>
            <li className="info">Humidity: {props.data.humidity}%</li>
            <li className="info">Wind: {props.data.wind} km/h</li>
          </ul>
          <br />
        </div>
        <div className="col-3">
          <br />
          <br />
          <h4 className="text-capitalize">{props.data.description}</h4>
        </div>
        <div className="col-2">
          <br />
          <br />
          <WeatherIcon code={props.data.icon} size={52} />
        </div>
        <div className="col-4">
          <br />
          <br />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
