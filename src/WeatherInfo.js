import React from "react";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="title-spacer container">
        <div className="row">
          <div className="col-3 col-md-3">
            <div className="clearfix">
              <div className="text-center">
                <WeatherIcon code={props.data.icon} size={250} />
                <h3 className="text-capitalize">{props.data.description}</h3>
              </div>
            </div>
          </div>
          <div className="col-3 col-md-3">
            <TempConversion fahrenheit={props.data.temperature} />
          </div>
          <div className="col-3 col-md-3">
            <div className="title-spacer">
              <h3>Feels Like: {props.data.feel}°</h3>
            </div>
            <div className="title-spacer">
              <h3>Humidity: {props.data.humidity}%</h3>
            </div>
          </div>
          <div className="col-3 col-md-3">
            <div className="title-spacer">
              <Sunrise date={props.data.sunrise} />{" "}
            </div>
            <div className="title-spacer">
              <Sunset date={props.data.sunset} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
