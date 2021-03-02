import React, { useState } from "react";

function Form(props) {
  const [subject, setSubject] = useState(""); //initial value of the state called 'subject' is empty string. This state is for user input value.
  console.log("line5" + subject); //This proves UI is re-rendered after setSubject().

  function handleChange(e) {
    console.log("line8" + subject);
    setSubject(e.target.value); //because user input value is coming from Form component itself, not from outside of this component, we need to use state.
    console.log("line10" + subject);
  }
  //Right after setSubject() is called, entire Form() is re-called. re-run. Every UI is re-rendered with the new state.

  //create a new task
  function handleSubmit(e) {
    e.preventDefault();
    console.log(subject);
    props.cb(subject); //pass data(=state called 'subject') from <Form /> (=child component) to <App /> (=parent component).
    setSubject(""); //clear the input after the form submission.
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>
        <label>TO DO LIST</label>
      </h1>

      <input
        type="text"
        name="textinput"
        value={subject}
        onChange={handleChange}
      ></input>

      <button className="btn btn__primary">Add</button>
    </form>
  );
}

export default Form;
