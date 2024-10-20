
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditTask = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const task = tasks.find((task) => task.id === parseInt(id));
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const navigate = useNavigate();

  const updateTask = () => {
    if (title && description) {
      setTasks(tasks.map((t) => (t.id === parseInt(id) ? { ...t, title, description } : t)));
      navigate('/');
    } else {
      alert('Both fields are required');
    }
  };

  return (
    <div className="container">
      <h2>Edit Task</h2>
      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button className="btn btn-primary mt-3" onClick={updateTask}>Update</button>
    </div>
  );
};

export default EditTask;
