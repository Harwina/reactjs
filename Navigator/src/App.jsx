// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'JavaScript', description: 'Learn JavaScript', status: 'active' },
    { id: 2, title: 'React', description: 'Learn React.js', status: 'inactive' },
  ]);

  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<TaskList tasks={tasks} setTasks={setTasks} />} />
          <Route path="/add" element={<AddTask tasks={tasks} setTasks={setTasks} />} />
          <Route path="/edit/:id" element={<EditTask tasks={tasks} setTasks={setTasks} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
