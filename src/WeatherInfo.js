import React from "react";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="title-spacer">
        <div className="row">
          <div className="col-3 col-md-3">
            <div className="clearfix">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} />
              </div>
            </div>
            <div className="col-3 col-md-3">
              <span className="float-left temperature">
                {props.data.temperature}
              </span>
              <span className="units">
                <TempConversion />
              </span>
            </div>
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
