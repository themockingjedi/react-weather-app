import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="title-spacer">
        <div className="row">
          <div className="col-3 col-md-3">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left img-fluid"
            />
          </div>
          <div className="col-3 col-md-3">
            <span className="float-left temperature" id="temp">
              {props.data.temperature}
            </span>
            <span className="units">
              <a href="#" id="fahrenheit-link" className="active">
                °F
              </a>{" "}
              |{" "}
              <a href="#" id="celcius-link">
                °C
              </a>
            </span>
          </div>
          <div className="col-6 col-md-6">
            <ul>
              <li id="feels-like">Feels Like: {props.data.feel}°</li>
              <li className="li-bottom">Humidity: {props.data.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3 col-md-3 forecast-spacer">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li className="li-bottom" id="date"></li>
          </ul>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}
