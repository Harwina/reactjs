const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increment} className="btn btn-success me-3">+</button>
      <button onClick={decrement} className="btn btn-danger me-3" disabled={count === 0}>-</button>
      <button onClick={reset} className="btn btn-warning">Reset</button>
    </div>
  );
};

export default Counter;
