// src/App.js
import React from 'react';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Redux Counter App</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
