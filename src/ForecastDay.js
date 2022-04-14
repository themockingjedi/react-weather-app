import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./ForecastDay.css";

export default function ForecastDay(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="row bottom-forecast-spacer text-center">
        <div className="col col-md-auto">
          <div className="forecast-day">
            <h4>{day()}</h4>
          </div>
          <WeatherIcon code={props.data.weather[0].icon} size={75} />
          <div className="forecast-temp">
            <span className="forecast-high fw-bold fs-5">{maxTemp()}</span>{" "}
            <span className="forecast-low fw-light fs-5">{minTemp()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
