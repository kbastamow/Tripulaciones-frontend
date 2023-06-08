import React from 'react'
import './App.scss'
import Register from './pages/register/Register';
import RegisterIsma from './pages/registerIsma/RegisterIsma';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Events from './pages/events/Events';
import { Home } from './pages/home/Home';
import NavBar from './components/navBar/NavBar';
import UpdateProfile from './pages/updateProfile/UpdateProfile';




function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
