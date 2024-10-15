import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./TodoList";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Study", date: "2022-04-20", description: "Learn React.js" },
    { id: 2, title: "Workout", date: "2022-04-28", description: "Go to gym" },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<TodoList tasks={tasks} deleteTask={deleteTask} />}
        />
        <Route
          path="/add"
          element={<AddTask addTask={addTask} />}
        />
        <Route
          path="/edit/:id"
          element={<EditTask tasks={tasks} editTask={editTask} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
