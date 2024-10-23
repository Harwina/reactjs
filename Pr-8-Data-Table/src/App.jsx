// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTask from './component/AddTask';
import ViewTask from './component/ViewTask';
import Navbar from './component/Navbar';
import { TaskProvider } from './TaskContext';

function App() {
  return (
    <TaskProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ViewTask />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/edit/:id" element={<AddTask />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;
