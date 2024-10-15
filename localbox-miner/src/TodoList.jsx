import React from 'react';
import { Link } from 'react-router-dom';

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <div className="todo-list-container">
      <div className='mb-4'>
        <h1 className='fs-3 fw-bold'>TODO App</h1>
      </div>
      <Link to="/add" className="btn mb-3" style={{ backgroundColor: '#F5A623', color: '#fff', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>
        + Add New Task
      </Link>
      <div className="tasks-container">
        {tasks.length === 0 ? (
          <p className="text-muted">No tasks available. Add a new task to get started!</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-card p-4 mb-4" style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h4 style={{ color: '#4A90E2', marginBottom: '5px' }}>{task.title}</h4>
              <span className="task-date" style={{ color: '#7F8C8D', fontSize: '0.9em' }}>{task.date}</span>
              <p style={{ color: '#2C3E50' }}>{task.description}</p>
              <div className="task-actions d-flex justify-content-between mt-3">
                <Link 
                  to={`/edit/${task.id}`} 
                  className="btn" 
                  style={{ backgroundColor: '#59A3C2', color: '#fff', padding: '5px 15px', borderRadius: '5px', textDecoration: 'none' }}
                >
                  Edit
                </Link>
                <button 
                  className="btn" 
                  style={{ backgroundColor: '#D0821B', color: '#fff', padding: '5px 15px', borderRadius: '5px' }} 
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
