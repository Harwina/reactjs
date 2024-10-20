
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TaskList = ({ tasks, setTasks }) => {
  const [selectedTasks, setSelectedTasks] = useState([]);

  const toggleTaskSelection = (taskId) => {
    setSelectedTasks((prev) =>
      prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
    );
  };

  const deleteSelectedTasks = () => {
    setTasks(tasks.filter((task) => !selectedTasks.includes(task.id)));
    setSelectedTasks([]);
  };

  const toggleTaskStatus = () => {
    setTasks(
      tasks.map((task) =>
        selectedTasks.includes(task.id)
          ? { ...task, status: task.status === 'active' ? 'inactive' : 'active' }
          : task
      )
    );
    setSelectedTasks([]);
  };

  return (
    <div>
      <h2 className="text-center">Task List</h2>
      <Link to="/add" className="btn btn-primary mb-3">Add New Task</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
            <th>
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedTasks(tasks.map((task) => task.id));
                  } else {
                    setSelectedTasks([]);
                  }
                }}
                checked={selectedTasks.length === tasks.length}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>
                <Link to={`/edit/${task.id}`} className="btn btn-info mr-2"><FaEdit /></Link>
                <button className="btn btn-danger ms-2" onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}>
                  <FaTrash />
                </button>
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={selectedTasks.includes(task.id)}
                  onChange={() => toggleTaskSelection(task.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedTasks.length > 0 && (
        <div className="d-flex justify-content-between">
          <button className="btn btn-danger" onClick={deleteSelectedTasks}>
            Delete Selected
          </button>
          <button className="btn btn-secondary" onClick={toggleTaskStatus}>
            Toggle Status
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskList;
