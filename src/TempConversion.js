import React, { useState } from "react";
import "./TempConversion.css";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="TempConversion">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6">
              <div className="temperature">{Math.round(props.fahrenheit)}</div>
            </div>
            <div className="col-6 col-md-6 units">
              <a href="/">°F |</a>{" "}
              <a href="/" onClick={convertToCelcius}>
                °C
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let celcius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="TempConversion">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6">
              <div className="temperature">{Math.round(celcius)}</div>{" "}
            </div>
            <div className="col-6 col-md-6 units">
              <a href="/" onClick={convertToFahrenheit}>
                °C |
              </a>{" "}
              <a href="/">°F </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
