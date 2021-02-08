import Task from "./Task";
import "./SortedList.css";
function SortedList(props) {
  const route = props.route;
  const updateComplete = props.updateComplete;
  const updateName = props.updateName;
  const deleteItem = props.deleteItem;
  const tasks = props.tasks;

  let taskList = tasks.map((task) => (
    <Task
      task={task}
      key={task.id}
      updateComplete={updateComplete}
      updateName={updateName}
      deleteItem={deleteItem}
    />
  ));

  let activeTaskObjs = tasks.filter((task) => !task.complete);
  let activeTaskList = activeTaskObjs.map((task) => (
    <Task
      task={task}
      key={task.id}
      updateComplete={updateComplete}
      updateName={updateName}
      deleteItem={deleteItem}
    />
  ));

  let completeTaskObjs = tasks.filter((task) => task.complete);
  const handleDelete = (event) => {
    deleteItem(event.target.lastChild.nodeValue);
  };
  let completeTaskList = completeTaskObjs.map((task) => (
    <li key={task.id} className="complete-list">
      {task.name}
      <div className="remove-complete-item">
        <button onClick={handleDelete}>delete {task.name}</button>
      </div>
    </li>
  ));

  return (
    <div>
      {route === "all" ? <div>{taskList}</div> : ""}
      {route === "active" ? <div>{activeTaskList}</div> : ""}
      {route === "complete" ? <div>{completeTaskList}</div> : ""}
    </div>
  );
}

export default SortedList;
