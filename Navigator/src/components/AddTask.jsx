
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTask = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const addTask = () => {
    if (title && description) {
      const newTask = {
        id: tasks.length + 1,
        title,
        description,
        status: 'active'
      };
      setTasks([...tasks, newTask]);
      navigate('/');
    } else {
      alert('Both fields are required');
    }
  };

  return (
    <div className="container">
      <h2>Add Task</h2>
      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button className="btn btn-primary mt-3" onClick={addTask}>Add</button>
    </div>
  );
};

export default AddTask;
