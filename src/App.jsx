import React from 'react'
import './App.css'
import Register from './pages/register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateProfile from './pages/updateProfile/updateProfile';



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
