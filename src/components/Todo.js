import React, { useState } from "react";

//'Todo' is the name of a component
export default function Todo(props) {
  console.log("line5 in Todo component"); //right after setIsEditing() is called, Todo() function will be called again so that Todo component UI is re-rendered.

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleClickSave() {
    props.editTask(props.id, newName);
    setNewName("");
    setIsEditing(false);
  }
  const editingTemplate = (
    <li>
      <div>
        <label>New name for {props.subject}</label>
      </div>
      <input
        id={props.id}
        type="text"
        value={newName}
        onChange={handleChange}
      ></input>

      <div>
        <button className="btn" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
        <button className="btn btn__danger" onClick={handleClickSave}>
          Save
        </button>
      </div>
    </li>
  );

  const viewTemplate = (
    <li>
      <input
        id={props.id}
        type="checkbox"
        defaultChecked={props.isCompleted}
        onChange={() => props.toggleTaskCompleted(props.id)} //pass id of targeted Element to <App /> so that <App /> knows which task's checkbox is clicked.
      ></input>
      <span>{props.subject}</span>

      <div>
        <button className="btn" onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );

  return isEditing ? editingTemplate : viewTemplate;
}
