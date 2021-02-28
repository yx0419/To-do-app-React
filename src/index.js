import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  //first argument = what to render, second argument = where to render
  <React.StrictMode>
    <App sub="Let's eat Apple" />
  </React.StrictMode>,
  document.getElementById("root")
); //Render my React app with the 'App' component as the root, or first component.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
