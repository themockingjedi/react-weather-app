import { useState } from "react";
import Weather from "./Weather";

import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  function updateCity(event) {
    event.preventDefault();
    setMessage(<Weather city={city} />);
  }
  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form onSubmit={updateCity}>
        <div className="row">
          <div className="col-8 col-md-8">
            <input
              type="search"
              placeholder="Enter a city"
              autoComplete="off"
              onChange={changeCity}
              className="search-spacer form-control-lg form-control"
            />
          </div>
          <div className="col-3 col-md-2">
            <input
              type="submit"
              value="Search"
              className="search-button btn-lg"
            />
          </div>
          <div className="col-2 col-md-2">
            <button className="reset-button btn-lg">Reset</button>
          </div>
        </div>
      </form>

      <br />
      <h3>{message}</h3>
    </div>
  );
}
