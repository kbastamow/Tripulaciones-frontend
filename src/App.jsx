import React from 'react'
import './App.scss'
import Register from './pages/register/Register';
import RegisterIsma from './pages/registerIsma/RegisterIsma';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/registerIsma" element={<RegisterIsma />} />

        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App
