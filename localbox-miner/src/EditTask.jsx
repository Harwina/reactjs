import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditTask = ({ tasks, editTask }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const task = tasks.find((t) => t.id === Number(id));
    if (task) {
      setTitle(task.title);
      setDate(task.date);
      setDescription(task.description);
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      id: Number(id),
      title,
      date,
      description,
    };
    editTask(updatedTask);
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="btn-primary">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;
