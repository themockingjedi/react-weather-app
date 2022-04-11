import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";
import UpdateDate from "./UpdateDate";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function setInfo(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: 23,
      city: response.data.name,
      humidity: Math.round(response.data.main.humidity),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      description: response.data.weather[0].description,
      feel: Math.round(response.data.main.feels_like),
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "2d15662f0a607d166c07789453c7a23b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(setInfo);
  }

  function updateInfo(event) {
    event.preventDefault();
    search();
  }

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row d-flex">
          <div className="col-6 col-md-3">
            <h1 className="title-spacer">{weatherData.city}</h1>
          </div>
          <div className="col-6 col-md-6 flex-column">
            <h1 className="title-spacer">
              <UpdateDate date={weatherData.date} />
            </h1>
          </div>
          <div className="col-9 col-md-9 d-flex flex-column">
            <form onSubmit={updateInfo}>
              <div className="row d-flex">
                <div className="col-9 col-md-9">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    autoComplete="off"
                    onChange={changeCity}
                    className="search-spacer form-control-lg form-control"
                  />
                </div>
                <div className="col-3 col-md-3 d-flex">
                  <input
                    type="submit"
                    value="Search"
                    className="search-button btn-lg"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
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
    search();
    return "Loading...";
  }
}
