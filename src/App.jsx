import React from 'react'
import './App.scss'
import Register from './pages/register/Register';
import RegisterIsma from './pages/registerIsma/RegisterIsma';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Events from './pages/events/Events';
import { Home } from './pages/home/Home';
import Community from './pages/community/Community';
import UserDetails from './pages/userDetails/UserDetails';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registerIsma" element={<RegisterIsma />} />
          <Route path="/events" element={<Events />} />         
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/userDetails/:id" element={<UserDetails />} />


        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App
