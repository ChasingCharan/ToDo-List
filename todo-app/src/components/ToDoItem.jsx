import React, { useState } from "react";
import "./ToDoItem.css";

function ToDoItem(props) {
  const { task, toggleComplete, deleteTask, editTask } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  function handleEditChange(event) {
    setNewText(event.target.value);
  }

  function saveEdit() {
    editTask(task.id, newText);
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={newText}
          onChange={handleEditChange}
        />
      ) : (
        <span className={task.completed ? "completed" : ""}>{task.text}</span>
      )}

      <div className="buttons">
        {isEditing ? (
          <button className="save-btn" onClick={saveEdit}>
            Save
          </button>
        ) : (
          <>
            <button className="edit-btn" onClick={handleEdit}>
              Edit
            </button>
            <button className="complete-btn" onClick={function () { toggleComplete(task.id); }}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button className="delete-btn" onClick={function () { deleteTask(task.id); }}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ToDoItem;
