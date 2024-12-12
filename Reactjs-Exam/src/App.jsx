import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";
import Login from "./components/Login";
import "./App.css"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </div>
  );
};

export default App;