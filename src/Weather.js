import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temp, setTemp] = useState(null);
  function showTemp(response) {
    setTemp(Math.round(response.data.main.temp));
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=2d15662f0a607d166c07789453c7a23b&units=metric`;
  axios.get(url).then(showTemp);

  return (
    <h2>
      It is {temp}°C in {props.city}
    </h2>
  );
}
