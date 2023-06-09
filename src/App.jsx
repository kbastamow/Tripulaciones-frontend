import React from 'react'
import './App.scss'
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Register from './pages/register/Register';
import RegisterIsma from './pages/registerIsma/RegisterIsma';
import Login from './pages/login/Login';
import Events from './pages/events/Events';
import { Home } from './pages/home/Home';
import NavBar from './components/navBar/NavBar';
import Header from './components/header/Header';


function App() {
  const { token } = useSelector((state) => state.auth)

  return (
    <div className="App">
      <BrowserRouter>
      <div>
        {token ? <Header /> : <></>}
        </div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registerIsma" element={<RegisterIsma />} />
          <Route path="/events" element={<Events />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <div>
        {token ? <NavBar /> : <></>}
        </div>
      </BrowserRouter>
    </div>
  );

}

export default App
