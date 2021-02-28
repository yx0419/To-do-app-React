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

      <h2>2 tasks remaining</h2>

      <ul>
        <li>
          <input type="checkbox"></input>
          <span>Eat</span>

          <div>
            <button className="btn">Edit</button>
            <button className="btn btn__danger">Delete</button>
          </div>
        </li>

        <li>
          <input type="checkbox"></input>
          <span>Sleep</span>

          <div>
            <button className="btn">Edit</button>
            <button className="btn btn__danger">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App; //exports a function called 'App', which is a component. src/index.js imports this 'App'.
