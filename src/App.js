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
            rel="noreferrer noopener"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted{" "}
          <a
            href="https://deft-moonbeam-20bf9d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
