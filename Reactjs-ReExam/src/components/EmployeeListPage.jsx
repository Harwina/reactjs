import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EmployeeListPage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <h2>Employee List</h2>
        <Link to="/add" className="btn btn-primary">
          Add Employee
        </Link>
      </div>
      {employees.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Salary</th>
              <th>Designation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>
                  {employee.emp_photo ? (
                    <img src={employee.emp_photo} alt="Employee" width="50" />
                  ) : (
                    "No Photo"
                  )}
                </td>
                <td>{employee.emp_name}</td>
                <td>{employee.emp_email}</td>
                <td>{employee.emp_city}</td>
                <td>{employee.emp_salary}</td>
                <td>{employee.emp_designation}</td>
                <td>
                  <Link to={`/edit/${employee.id}`} className="btn btn-warning btn-sm me-2">
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employees found. Add new employees to view them here.</p>
      )}
    </div>
  );
};

export default EmployeeListPage;
