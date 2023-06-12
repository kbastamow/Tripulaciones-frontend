import React from 'react'
import './App.scss'
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Community from './pages/community/Community';
import UserDetails from './pages/userDetails/UserDetails';
import NavBar from './components/navBar/NavBar';
import Header from './components/header/Header';
import UpdateProfile from './pages/updateProfile/UpdateProfile';
import EventOne from './pages/eventOne/EventOne';
import Chat from './pages/chat/Chat';
import UserProfile from './pages/userProfile/UserProfile';
import Enterprises from './pages/enterprises/Enterprises';
import PrivateZone from './guards/PrivateZone';
import PageNotFound from './components/pageNotFound/PageNotFound';

import ChatInstant from './pages/chat/ChatInstant';





function App() {
  const { token } = useSelector((state) => state.auth)


  return (
    <div className="App">
      <BrowserRouter>
        {/* <div>
        {token ? <Header /> : <></>}
        </div> */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat/instant/:id" element={<ChatInstant />} />
          <Route path="/" element={<PrivateZone><Home /></PrivateZone>}></Route>
          <Route path="/community" element={<PrivateZone><Community /></PrivateZone>} />
          <Route path="/userDetails/:id" element={<PrivateZone><UserDetails /></PrivateZone>} />
          <Route path="/chat" element={<PrivateZone><Chat /></PrivateZone>} />
          <Route path="/userProfile/:id" element={<PrivateZone><UserProfile /></PrivateZone>} />
          <Route path="/events/:id" element={<PrivateZone><EventOne /></PrivateZone>} />
          <Route path="/navBar" element={<PrivateZone><NavBar /></PrivateZone>} />
          <Route path="/updateProfile" element={<PrivateZone><UpdateProfile /></PrivateZone>} />
          <Route path="/enterprises" element={<PrivateZone><Enterprises /></PrivateZone>} />

          <Route path="/*" element={<PageNotFound></PageNotFound>} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App
