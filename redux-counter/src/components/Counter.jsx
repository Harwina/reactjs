// src/components/Counter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inc, dec } from '../redux/actions';

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => dispatch(inc())}
        style={{ fontSize: '20px', marginRight: '10px' }}
      >
        +
      </button>
      <button
        onClick={() => dispatch(dec())}
        style={{ fontSize: '20px' }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
