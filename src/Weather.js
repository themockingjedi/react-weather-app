import React, { useState } from "react";
import axios from "axios";
import UpdateDate from "./UpdateDate";
import WeatherInfo from "./WeatherInfo";
import WeeklyForecast from "./WeeklyForecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function setInfo(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      wind: 23,
      city: response.data.name,
      humidity: Math.round(response.data.main.humidity),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      feel: Math.round(response.data.main.feels_like),
      date: new Date(response.data.dt * 1000),
      sunrise: response.results.sunrise,
      sunset: response.results.sunset,
    });
  }

  function search() {
    const apiKey = "2d15662f0a607d166c07789453c7a23b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(setInfo);

    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&formatted=0`;

    axios.get(apiUrl).then(setInfo);
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
        <WeeklyForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <h1>"Loading..."</h1>;
  }
}
