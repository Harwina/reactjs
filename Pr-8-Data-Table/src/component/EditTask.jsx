// src/components/EditTask.jsx
import React, { useContext, useState } from 'react';
import { TaskContext } from '../TaskContext';
import { useParams, useNavigate } from 'react-router-dom';

const EditTask = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { id } = useParams();
  const navigate = useNavigate();
  
  const taskToEdit = tasks.find((task) => task.id === parseInt(id));
  const [editedTask, setEditedTask] = useState({ ...taskToEdit });

  const handleInputChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks(tasks.map((task) => (task.id === parseInt(id) ? editedTask : task)));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Task</h2>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={editedTask.name}
        onChange={handleInputChange}
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={editedTask.email}
        onChange={handleInputChange}
      />

      <label>Gender:</label>
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={editedTask.gender === 'Male'}
        onChange={handleInputChange}
      />
      Male
      <input
        type="radio"
        name="gender"
        value="Female"
        checked={editedTask.gender === 'Female'}
        onChange={handleInputChange}
      />
      Female

      <label>Course:</label>
      {['HTML', 'CSS', 'React', 'Node'].map((course) => (
        <div key={course}>
          <input
            type="checkbox"
            name="course"
            value={course}
            checked={editedTask.course.includes(course)}
            onChange={handleInputChange}
          />
          {course}
        </div>
      ))}

      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={editedTask.date}
        onChange={handleInputChange}
      />

      <label>Status:</label>
      <select name="status" value={editedTask.status} onChange={handleInputChange}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default EditTask;
