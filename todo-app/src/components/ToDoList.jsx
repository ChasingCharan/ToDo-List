import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

function ToDoList(props) {
  const { tasks, toggleComplete, deleteTask, editTask } = props;

  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p className="empty-message">No tasks available.</p>
      ) : (
        tasks.map(function (task) {
          return (
            <ToDoItem
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          );
        })
      )}
    </div>
  );
}

export default ToDoList;
