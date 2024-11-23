import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../Redux/Action/Action";

const AddNew = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddClick = () => {
    if (name && phone) {
      dispatch(addItem({ name, phone }));
      setName("");
      setPhone("");
      navigate("/view");
    } else {
      alert("Please enter both name and phone.");
    }
  };

  return (
    <div align="center">
      <h1>Add New Data</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p></p>
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p></p>
        <button onClick={handleAddClick}>Add</button>
      </div>
    </div>
  );
};

export default AddNew;
