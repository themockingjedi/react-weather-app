import React, { useState } from "react";

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
        <div className="temperature">{Math.round(props.fahrenheit)}</div>
        <a href="/" className="unit">
          °F
        </a>{" "}
        |{" "}
        <a href="/" onClick={convertToCelcius}>
          °C
        </a>
      </div>
    );
  } else {
    let celcius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="TempConversion">
        <div className="temperature">{Math.round(celcius)}</div>{" "}
        <a href="/" onClick={convertToFahrenheit}>
          °C
        </a>{" "}
        | °F
      </div>
    );
  }
}
