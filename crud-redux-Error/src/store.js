// src/store.js
import { createStore } from 'redux';
import rootReducer from './redux/crud-reducer';


const store = createStore(rootReducer);

export default store; 
