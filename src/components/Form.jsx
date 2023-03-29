import React, { useRef } from "react";

const Form = (props) => {
  const taskRef = useRef();
  const categoryRef = useRef();
  const dateRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    let newTask = {
      task: taskRef.current.value,
      category: categoryRef.current.value,
      date: dateRef.current.value,
    };
    console.log(newTask);

    taskRef.current.value = "";
    categoryRef.current.value = "";
    dateRef.current.value = null;
    taskRef.current.focus();
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Add a Task</h2>
      <input type="text" placeholder="Task" ref={taskRef} />
      <select ref={categoryRef}>
        <option value="">Pick a Category</option>
        <option value="Home">Home</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
      <input type="date" ref={dateRef} />
      <button>Add</button>
    </form>
  );
};

export default Form;
