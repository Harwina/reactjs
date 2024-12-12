// src/components/TaskList.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const handleAddTask = () => {
    navigate("/add"); // Navigate to AddTask page
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Task List</h1>
      <div className="button-container">
        <button className="form-button" onClick={handleAddTask}>
          Add New Task
        </button>
      </div>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="4" className="no-tasks-message">
                No tasks available. Add a new task!
              </td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.task}</td>
                <td>{task.status}</td>
                <td>{task.deadline}</td>
                <td>
                  <button className="edit-button">Edit</button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
