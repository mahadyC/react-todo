import "./SortButtons.css";
function SortButtons(props) {
  const setRoute = props.setRoute;
  return (
    <div className="sort-buttons">
      <button onClick={(event) => setRoute("all")}>Show all tasks</button>
      <button onClick={(event) => setRoute("active")}>Show active tasks</button>
      <button onClick={(event) => setRoute("complete")}>
        Show completed tasks
      </button>
    </div>
  );
}

export default SortButtons