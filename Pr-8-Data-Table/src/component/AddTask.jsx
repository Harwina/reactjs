// src/components/AddTask.jsx
import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../TaskContext';
import { useParams, useNavigate } from 'react-router-dom';

const AddTask = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { id } = useParams(); // get task id from URL if editing
  const navigate = useNavigate();

  const [newTask, setNewTask] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    course: [],
    date: '',
    status: '',
  });

  // If editing, populate the form with the task data
  useEffect(() => {
    if (id) {
      const taskToEdit = tasks.find((task) => task.id === parseInt(id));
      if (taskToEdit) {
        setNewTask(taskToEdit);
      }
    }
  }, [id, tasks]);

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setNewTask((prev) => ({
      ...prev,
      course: checked
        ? [...prev.course, value]
        : prev.course.filter((c) => c !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // Update task
      const updatedTasks = tasks.map((task) =>
        task.id === parseInt(id) ? newTask : task
      );
      setTasks(updatedTasks);
    } else {
      // Add new task
      setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    }
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{id ? 'Edit Task' : 'Add New Task'}</h2>
      <form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={newTask.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={newTask.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={newTask.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="mb-3">
          <label>Gender:</label><br />
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={newTask.gender === 'Male'}
            onChange={handleInputChange}
          />
          <label className="ms-1 me-3">Male</label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={newTask.gender === 'Female'}
            onChange={handleInputChange}
          />
          <label className="ms-1">Female</label>
        </div>

        <div className="mb-3">
          <label>Course:</label><br />
          {['HTML', 'CSS', 'React', 'Node'].map((course) => (
            <div className="form-check form-check-inline" key={course}>
              <input
                type="checkbox"
                className="form-check-input"
                name="course"
                value={course}
                checked={newTask.course.includes(course)}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label">{course}</label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <label>Date:</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={newTask.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Status:</label>
          <select
            className="form-select"
            name="status"
            value={newTask.status}
            onChange={handleInputChange}
            required
          >
            <option value="">Select status</option>
            <option value="active" className="bg-green">Active</option>
            <option value="inactive" className="bg-red">Inactive</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          {id ? 'Update Task' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default AddTask;
