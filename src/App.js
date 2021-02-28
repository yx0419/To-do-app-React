import Todo from "./components/Todo";

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <label>What needs to be done?</label>
      <br />

      <input type="text" name="textinput"></input>
      <br />

      <button className="btn btn__primary">Add</button>
      <br />

      <button className="btn toggle-btn" aria-pressed="true">
        <span>All</span>
      </button>

      <button className="btn toggle-btn" aria-pressed="false">
        <span>Active</span>
      </button>

      <button type="button" className="btn toggle-btn" aria-pressed="false">
        <span>Completed</span>
      </button>

      <h2>3 tasks remaining</h2>

      <ul>
        <Todo subject="Read" isCompleted={true} id="todo-0" />
        <Todo subject="Exercise" isCompleted={false} id="todo-1" />
        <Todo subject="Sleep" isCompleted={false} id="todo-2" />
      </ul>
    </div>
  );
}

export default App; //exports a function called 'App', which is a component. src/index.js imports this 'App'.
