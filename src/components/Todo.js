// import React from "react";

//'Todo' is the name of a component
export default function Todo(props) {
  return (
    <li>
      <input
        id={props.id}
        type="checkbox"
        defaultChecked={props.isCompleted}
        onChange={() => props.toggleTaskCompleted(props.id)} //pass id of targeted Element to <App /> so that <App /> knows which task's checkbox is clicked.
      ></input>
      <span>{props.subject}</span>

      <div>
        <button className="btn">Edit</button>
        <button className="btn btn__danger">Delete</button>
      </div>
    </li>
  );
}
