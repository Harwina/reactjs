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
      navigate("/tasks");
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
            placeholder="Enter Task"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Enter Status"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Deadline:</label>
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="form-input"
          />
        </div>
        <button className="btn-primary" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;