import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>React Wk 4 Homework</h1>
      <h2>Migrating the thing that can do stuff</h2>
      <Search />
      <footer>
        This app was written by DeAnne Lombardi and is{" "}
        <a
          href="https://github.com/themockingjedi/react-weather-app"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
