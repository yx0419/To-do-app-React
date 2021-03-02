import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const DATA = [
    {
        subject: "Read",
        isCompleted: true,
        id: "todo-0",
    },
    {
        subject: "Exercise",
        isCompleted: false,
        id: "todo-1",
    },
    {
        subject: "Sleep",
        isCompleted: false,
        id: "todo-2",
    },
];
/* <Todo subject="Read" isCompleted={true} id="todo-0" /> */

//pass DATA to <App /> as a prop.
ReactDOM.render(
    //first argument = what to render, second argument = where to render
    <React.StrictMode>
        <App tasksArr={DATA} />
    </React.StrictMode>,
    document.getElementById("root")
); //Render my React app with the 'App' component as the root, or first component.
