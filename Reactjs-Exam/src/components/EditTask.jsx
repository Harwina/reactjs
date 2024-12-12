import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../redux/actions";
import { useParams, useNavigate } from "react-router-dom";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const taskToEdit = useSelector((state) => state.tasks.find((task) => task.id === parseInt(id)));
  const [task, setTask] = useState(taskToEdit.task);
  const [status, setStatus] = useState(taskToEdit.status);
  const [deadline, setDeadline] = useState(taskToEdit.deadline);

  const handleSave = () => {
    dispatch(editTask({ id: taskToEdit.id, task, status, deadline }));
    navigate("/tasks");
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditTask;