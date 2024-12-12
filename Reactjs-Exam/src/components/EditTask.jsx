import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editTask } from "../redux/actions";

const EditTask = () => {
  const { id } = useParams(); // Get the task ID from the URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch the task to edit from Redux state
  const taskToEdit = useSelector((state) =>
    state.tasks.find((task) => task.id === parseInt(id))
  );

  // Local state for editing the task
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit.task);
      setStatus(taskToEdit.status);
      setDeadline(taskToEdit.deadline);
    } else {
      navigate("/tasks"); // Redirect if task doesn't exist
    }
  }, [taskToEdit, navigate]);

  const handleSave = () => {
    if (task && status && deadline) {
      // Dispatch the action to update the task
      dispatch(editTask({ id: parseInt(id), task, status, deadline }));
      navigate("/tasks"); // Navigate back to the task list after saving
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Edit Task</h1>
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
        <button className="form-button" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditTask;
