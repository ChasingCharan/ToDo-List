import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./Body.css";

function Body() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(
        tasks.concat({ id: Date.now(), text: newTask, completed: false })
      );
      setNewTask("");
    }
  }

  function toggleComplete(taskId) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(taskId) {
    const updatedTasks = tasks.filter(function (task) {
      return task.id !== taskId;
    });
    setTasks(updatedTasks);
  }

  function editTask(taskId, newText) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === taskId) {
        return { ...task, text: newText };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="body-container">
      <div className="input-container">
        <input
          type="text"
          className="task-input"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task..."
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ToDoList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default Body;
