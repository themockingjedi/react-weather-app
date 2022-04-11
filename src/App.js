import "./App.css";
import Weather from "./Weather";
import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Boston" />

        <footer>
          This app was written by DeAnne Lombardi and is{" "}
          <a
            href="https://github.com/themockingjedi/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
