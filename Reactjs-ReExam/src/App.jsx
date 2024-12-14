import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeListPage from "./components/EmployeeListPage";
import EmployeeForm from "./components/EmployeeForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h1 className="text-center">Employee Management System</h1>
        <Routes>
          <Route path="/" element={<EmployeeListPage />} />
          <Route path="/add" element={<EmployeeForm />} />
          <Route path="/edit/:id" element={<EmployeeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
