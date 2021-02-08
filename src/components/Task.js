import "./Task.css";
function Task(props) {
  const task = props.task;
  const updateComplete = props.updateComplete;
  const updateName = props.updateName;
  const deleteItem = props.deleteItem;

  const handleChange = (event) => {
    let itemName = event.target.nextSibling.data;
    let completeValue = event.target.checked;
    updateComplete(itemName, completeValue);
  };

  const handleSave = (event) => {
    const id = event.target.id.substring(5);
    const editContainer = event.target.parentElement;
    let previousName = document.getElementById(`task-${id}`).firstElementChild
      .innerText;
    const currentName = document.getElementById(`edit-input-${id}`).value;
    if (currentName) {
      updateName(previousName, currentName);
      editContainer.hidden = true;
    } else {
      alert("write a task name");
    }
  };

  const editBtnHandler = (event) => {
    const task = document.getElementById(
      `${event.target.parentElement.id}-rewrite-div`
    );
    task.hidden ? (task.hidden = false) : (task.hidden = true);
  };

  const handleDelete = (event) => {
    deleteItem(event.target.lastChild.nodeValue);
  };

  return (
    <li id={`task-${task.id}`} className="list-item">
      <div className="checkbox-div">
        <label htmlFor="input-checkbox">
          <input
            type="checkbox"
            onChange={handleChange}
            id="input-checkbox"
            defaultChecked={task.complete}
          ></input>
          {task.name}
        </label>
      </div>
      <div hidden id={`${task.id}-rewrite-div`} className="edit-div">
        <label htmlFor="rewrite-task-input">
          <input
            type="text"
            id={`edit-input-${task.id}`}
            className="edit-input"
          ></input>
        </label>
        <button
          onClick={handleSave}
          id={`save-${task.id}`}
          className="save-button"
        >
          save
        </button>
      </div>
      <div id={`${task.id}`}>
        <button
          onClick={editBtnHandler}
          disabled={task.complete}
          className="edit-button"
        >
          edit {task.name}
        </button>
        <button onClick={handleDelete} className="delete-button">
          delete {task.name}
        </button>
      </div>
    </li>
  );
}

export default Task;
