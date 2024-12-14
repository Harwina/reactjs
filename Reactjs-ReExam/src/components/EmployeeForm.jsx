import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    emp_name: "",
    emp_email: "",
    emp_password: "",
    emp_city: "",
    emp_salary: "",
    emp_designation: "",
    emp_photo: null, // New photo field
  });

  useEffect(() => {
    if (id) {
      const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
      const employeeToEdit = storedEmployees.find((emp) => emp.id === parseInt(id));
      if (employeeToEdit) {
        setEmployee(employeeToEdit);
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEmployee({ ...employee, emp_photo: reader.result }); // Save base64 photo
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    if (id) {
      // Update existing employee
      const updatedEmployees = storedEmployees.map((emp) =>
        emp.id === parseInt(id) ? { ...emp, ...employee } : emp
      );
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    } else {
      // Add new employee
      const newEmployee = { ...employee, id: Date.now() };
      storedEmployees.push(newEmployee);
      localStorage.setItem("employees", JSON.stringify(storedEmployees));
    }
    navigate("/");
  };

  return (
    <div>
      <h2>{id ? "Edit Employee" : "Add Employee"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="emp_name"
            value={employee.emp_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="emp_email"
            value={employee.emp_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="emp_password"
            value={employee.emp_password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            name="emp_city"
            value={employee.emp_city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            type="number"
            className="form-control"
            name="emp_salary"
            value={employee.emp_salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input
            type="text"
            className="form-control"
            name="emp_designation"
            value={employee.emp_designation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Photo</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handlePhotoChange}
          />
          {employee.emp_photo && (
            <img src={employee.emp_photo} alt="Employee" width="100" className="mt-2" />
          )}
        </div>
        <button type="submit" className="btn btn-success">
          {id ? "Update" : "Add"} Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
