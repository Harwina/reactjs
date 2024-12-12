// src/components/AddTask.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const [deadline, setDeadline] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTask = () => {
    if (task && status && deadline) {
      dispatch({
        type: "ADD_TASK",
        payload: { id: Date.now(), task, status, deadline },
      });
      setTask("");
      setStatus("");
      setDeadline("");
      navigate("/tasks"); // Redirect to TaskList page after adding a task
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Add Task</h1>
      <div className="form-container">
        <div className="form-group">
          <label>Task:</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task description"
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Enter task status (e.g., Pending, Ongoing)"
          />
        </div>
        <div className="form-group">
          <label>Deadline:</label>
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <button className="form-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
