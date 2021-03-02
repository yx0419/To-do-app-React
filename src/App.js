import Todo from "./components/Todo";
import Form from "./components/Form.js";
import FilterButton from "./components/FilterButton";
import React, { useState } from "react";
import { nanoid } from "nanoid";

function App(props) {
  const [tasksArray, settasksArray] = useState(props.tasksArr); //'tasksArray' is an array of objects.

  //callback function 'callbackInParent' in the parent component.
  //Pass this callback as a prop to the child component so that child can call this callback with data.
  //It receives data 'subject' from child component <Form />.
  function callbackInParent(subject) {
    const newTask = {
      id: "todo-" + nanoid(),
      subject: subject,
      isCompleted: false,
    };
    settasksArray([...tasksArray, newTask]); //state called 'tasksArray' will contain a new array: [...tasksArray, newTask] now by adding a new object element 'newTask' to the array.
  }

  function toggleTaskCompleted(id) {
    console.log(tasksArray);
    //need to update tasksArray with received id. only need to update 'complete' key in tasksArray's one element.
    const updatedArray = tasksArray.map((task) => {
      if (id === task.id) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task; //without this line, 'subject' will be undefined and error.
      }
    });
    settasksArray(updatedArray);
    console.log(tasksArray);
  }

  //'tasksArray' is being updated every time callback is called.
  const TodosArray = tasksArray.map((obj) => (
    <Todo
      subject={obj.subject}
      isCompleted={obj.isCompleted}
      id={obj.id}
      key={obj.id}
      toggleTaskCompleted={toggleTaskCompleted}
    />
  ));

  const numOfTask = TodosArray.length;
  const taskNoun = TodosArray.length === 1 ? "Task" : "Tasks";
  const countSentence = `${numOfTask} ${taskNoun} to do`;

  return (
    <div className="todoapp stack-large">
      <Form cb={callbackInParent} />

      <div className="filters btn-group">
        <FilterButton btnName="All" ariapressed="true" />
        <FilterButton btnName="Active" ariapressed="false" />
        <FilterButton btnName="Completed" ariapressed="false" />
      </div>

      <h2>{countSentence}</h2>

      <ul>{TodosArray}</ul>
    </div>
  );
}

export default App; //exports a function called 'App', which is a component. src/index.js imports this 'App'.
