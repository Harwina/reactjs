import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, password } = loginData;

    if (id === "admin" && password === "password123") {
      // Example credentials
      onLogin({ id }); // Pass user data to App
    } else {
      setError(alert("Invalid ID or password!"));
    }
  };

  return (
    <div className="login">
      <h2 align="center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID</label>
          <input
            type="text"
            name="id"
            value={loginData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
