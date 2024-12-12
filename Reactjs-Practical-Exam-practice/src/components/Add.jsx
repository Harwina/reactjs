import React, { useState } from "react";

const Add = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    id: Date.now(), // Unique identifier
    name: "",
    email: "",
    password: "",
    city: "",
    hobbies: [],
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const newHobbies = checked
        ? [...formData.hobbies, value]
        : formData.hobbies.filter((hobby) => hobby !== value);
      setFormData({ ...formData, hobbies: newHobbies });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    alert("Data added successfully!");
    setFormData({
      id: Date.now(),
      name: "",
      email: "",
      password: "",
      city: "",
      hobbies: [],
      imageUrl: "",
    });
  };

  return (
    <div className="add-form">
      <h2 align="center">Add New Record</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>City</label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="">Select a city</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
          </select>
        </div>
        <div>
          <label>Hobbies</label>
          <div>
            <input
              type="checkbox"
              name="hobbies"
              value="Reading"
              onChange={handleChange}
            />
            Reading
          </div>
          <div>
            <input
              type="checkbox"
              name="hobbies"
              value="Traveling"
              onChange={handleChange}
            />
            Traveling
          </div>
          <div>
            <input
              type="checkbox"
              name="hobbies"
              value="Gaming"
              onChange={handleChange}
            />
            Gaming
          </div>
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Add;
