import React, { useState } from "react";
import Form from "./components/Form";
import SortButtons from "./components/SortButtons";
import SortedList from "./components/SortedList";
import "./App.css";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [taskName, setTaskName] = useState("");
  const [route, setRoute] = useState("all");
  // const [hidden, setHidden] = useState(true);

  const deleteItem = (itemName) => {
    let filteredTasks = tasks.filter((item) => item.name !== itemName);
    setTasks(filteredTasks);
  };
  const addItem = (itemName) => {
    let newObj = {
      id: UIDGenerator(),
      name: itemName,
      complete: false,
    };
    setTasks([...tasks, newObj]);
  };
  const updateComplete = (itemName, completeValue) => {
    let itemIndex = tasks.findIndex((item) => item.name === itemName);
    let newTasks = [...tasks];
    newTasks[itemIndex] = { ...newTasks[itemIndex], complete: completeValue };
    setTasks(newTasks);
    console.log(newTasks[itemIndex]);
  };

  const updateName = (previousName, newName) => {
    let itemIndex = tasks.findIndex((item) => item.name === previousName);
    let newTasks = [...tasks];
    newTasks[itemIndex] = { ...newTasks[itemIndex], name: newName };
    setTasks(newTasks);
  };

  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal. ref: https://gist.github.com/gordonbrander/2230317

  const UIDGenerator = () => "todo-" + Math.random().toString(36).substr(2, 9);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo react</h1>
        <Form
          addItem={addItem}
          setTaskName={setTaskName}
          taskName={taskName}
        />
        <SortButtons setRoute={setRoute} />
        <SortedList
          route={route}
          updateComplete={updateComplete}
          updateName={updateName}
          deleteItem={deleteItem}
          tasks={tasks}
        /> 
      </header>
    </div>
  );
}

export default App;
