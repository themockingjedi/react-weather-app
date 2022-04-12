import React from "react";

export default function SunriseSet(props) {
  let hour = props.date.getHours();
  let minute = props.date.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }

  return (
    <div className="Sunset">
      <p>
        Sunset: {hour}:{minute} PM
      </p>
    </div>
  );
}
