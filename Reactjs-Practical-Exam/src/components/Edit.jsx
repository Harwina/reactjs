import React, { useState, useEffect } from "react";

const Edit = ({ data, onEdit }) => {
  // Initialize form state
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    city: "",
    hobbies: [],
    imageUrl: "",
  });

  // Populate form with data to be edited
  useEffect(() => {
    if (data) {
      setFormData(data); // Pre-fill the form with the received data
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle checkbox for hobbies
    if (name === "hobbies") {
      const updatedHobbies = formData.hobbies.includes(value)
        ? formData.hobbies.filter((hobby) => hobby !== value) // Remove if unchecked
        : [...formData.hobbies, value]; // Add if checked

      setFormData({ ...formData, hobbies: updatedHobbies });
    } else {
      // For other inputs
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(formData); // Pass updated data to the parent component
  };

  return (
    <div className="edit-page">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* City */}
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="">Select City</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
          </select>
        </div>

        {/* Hobbies */}
        <div className="form-group">
          <label>Hobbies:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="Reading"
                checked={formData.hobbies.includes("Reading")}
                onChange={handleChange}
              />
              Reading
            </label>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="Traveling"
                checked={formData.hobbies.includes("Traveling")}
                onChange={handleChange}
              />
              Traveling
            </label>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="Cooking"
                checked={formData.hobbies.includes("Cooking")}
                onChange={handleChange}
              />
              Cooking
            </label>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="Sports"
                checked={formData.hobbies.includes("Sports")}
                onChange={handleChange}
              />
              Sports
            </label>
          </div>
        </div>

        {/* Image URL */}
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
