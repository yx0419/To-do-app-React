import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  //first argument = what to render, second argument = where to render
  <React.StrictMode>
    <App sub="Let's eat Apple" />
  </React.StrictMode>,
  document.getElementById("root")
); //Render my React app with the 'App' component as the root, or first component.
