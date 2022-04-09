import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";

import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  function setInfo(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      wind: 23,
      city: response.data.name,
      humidity: Math.round(response.data.main.humidity),
      icon: "https://cdn.vectorstock.com/i/1000x1000/53/35/sunny-weather-icon-vector-21015335.webp",
      description: response.data.weather[0].description,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <div className="row d-flex">
          <div className="col-6 col-md-3">
            <h1 className="title-spacer">{weatherData.city}</h1>
          </div>
          <div className="col-6 col-md-6 flex-column">
            <h1 className="title-spacer">Wednesday, April 6</h1>
          </div>
          <div className="col-9 col-md-9 d-flex flex-column">
            <Search />
          </div>
        </div>
        <div className="title-spacer">
          <div className="row">
            <div className="col-3 col-md-3">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-left img-fluid"
              />
            </div>
            <div className="col-3 col-md-3">
              <span className="float-left temperature" id="temp">
                {weatherData.temperature}
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
                <li id="feels-like">Feels Like: 20°</li>
                <li className="li-bottom">Humidity: {weatherData.humidity}%</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3 col-md-3 forecast-spacer">
            <ul>
              <li className="text-capitalize">{weatherData.description}</li>
              <li className="li-bottom" id="date"></li>
            </ul>
          </div>
          <div className="col-6"></div>
        </div>
        <div className="row bottom-forecast-spacer">
          <div className="col-2 col-md-2">
            <ul>
              <li>Monday</li>
              <li>Sunny</li>
              <li>50*</li>
            </ul>
          </div>
          <div className="col-2 col-md-2">
            <ul>
              <li>Tuesday</li>
              <li>Sunny</li>
              <li>50*</li>
            </ul>
          </div>
          <div className="col-2 col-md-2">
            <ul>
              <li>Wednesday</li>
              <li>Sunny</li>
              <li>50*</li>
            </ul>
          </div>
          <div className="col-2 col-md-2">
            <ul>
              <li>Thursday</li>
              <li>Sunny</li>
              <li>50*</li>
            </ul>
          </div>
          <div className="col-2 col-md-2">
            <ul>
              <li>Friday</li>
              <li>Sunny</li>
              <li>50*</li>
            </ul>
          </div>
          <div className="col-2 col-md-2">
            <ul>
              <li>Saturday</li>
              <li>Sunny</li>
              <li>50*</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2d15662f0a607d166c07789453c7a23b";
    let city = "Boston";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(setInfo);

    return "Loading...";
  }
}
