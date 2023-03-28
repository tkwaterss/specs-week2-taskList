import React, { useRef } from "react";

const Form = (props) => {
  return (
    <form className="card">
      <h2>Add a Task</h2>
      <input type="text" placeholder="Task" />
      <select>
        <option>Pick a Category</option>
        <option>Home</option>
        <option>Work</option>
        <option>Personal</option>
      </select>
      <input type="date" />
      <button>Add</button>
    </form>
  );
};

export default Form;
