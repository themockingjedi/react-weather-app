import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeeklyForecast.css";

export default function WeeklyForecast(props) {
  function getInfo(response) {
    console.log(response.data);
  }

  let apiKey = "2d15662f0a607d166c07789453c7a23b";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(getInfo);

  return (
    <div className="WeeklyForecast">
      <div className="row bottom-forecast-spacer">
        <div className="col-2 col-md-2">
          <div className="forecast-day">Monday </div>
          <WeatherIcon code="01d" size={75} />
          <div className="forecast-temp">
            <span className="forecast-high">hi</span>{" "}
            <span className="forecast-low">lo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
