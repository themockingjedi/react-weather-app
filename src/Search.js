import { useState } from "react";
import Weather from "./Weather";

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
        <input type="search" onChange={changeCity} />
        <input type="submit" value="Enter" />
      </form>
      <br />
      <h3>{message}</h3>
    </div>
  );
}
