// src/redux/actions.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const inc = () => ({
  type: INCREMENT,
});

export const dec = () => ({
  type: DECREMENT,
});
