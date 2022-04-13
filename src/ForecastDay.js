import React from "react";
import WeatherIcon from "./WeatherIcon";

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
      <div className="row bottom-forecast-spacer">
        <div className="col-2 col-md-2">
          <div className="forecast-day">{day()}</div>
          <WeatherIcon code={props.data.weather[0].icon} size={75} />
          <div className="forecast-temp">
            <span className="forecast-high">{maxTemp()}</span>{" "}
            <span className="forecast-low">{minTemp()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
