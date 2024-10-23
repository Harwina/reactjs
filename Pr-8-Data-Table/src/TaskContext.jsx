// src/TaskContext.js
import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Vivek',
      email: 'vivek@gmail.com',
      gender: 'Female',
      course: ['Angular', 'Python', 'Laravel'],
      date: '2024-06-12',
      status: 'inactive',
    },
  ]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
