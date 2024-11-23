// src/pages/view.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/crud-action/action';

const ViewPage = () => {
  const items = useSelector((state) => state.crudReducer.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h1>Items</h1>
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No items to display</p>
      )}
    </div>
  );
};

export default ViewPage;
