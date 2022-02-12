import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/rubinder/" target="blank">
            Rubinder {""}
          </a>
          and is {""}
          <a
            href="https://github.com/RubinderG/react-weatherapplication"
            target="blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
