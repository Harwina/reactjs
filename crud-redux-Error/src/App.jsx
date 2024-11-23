// src/App.js
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import AddPage from './pages/Add';
import ViewPage from './pages/View';

const App = () => (
    <BrowserRouter>
        <Routes>
          <Route path='/'element={<ViewPage/>}/>
          <Route path='/add'element={<AddPage/>}/>
        </Routes>
    </BrowserRouter>
);

export default App;
