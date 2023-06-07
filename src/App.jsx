import React from 'react'
import './App.css'
import Register from './pages/register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App
