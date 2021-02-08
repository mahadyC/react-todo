import "./Form.css";
function Form(props) {
  const addItem = props.addItem;
  const setTaskName = props.setTaskName;
  const taskName = props.taskName;
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.length) {
      addItem(taskName);
      setTaskName("");
    } else {
      alert("write a task name");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <label htmlFor="taskName">
        <input
          id="taskName"
          type="text"
          onChange={(event) => setTaskName(event.target.value)}
          value={taskName}
        ></input>
      </label>
      <button type="submit">add</button>
    </form>
  );
}

export default Form