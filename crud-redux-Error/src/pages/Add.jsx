// src/pages/add.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/crud-action/action';

const AddPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newItem = { id: Date.now(), name, description };
    dispatch(addItem(newItem));
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h1>Add Item</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item Name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button onClick={handleSubmit}>Add Item</button>
    </div>
  );
};

export default AddPage;
