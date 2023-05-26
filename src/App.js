import React from 'react';
import './App.css';
import Cafes from './components/cafes/cafes';
import Login from './components/login/login';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={ <Login /> } />
          <Route path="/cafes"  element={<Cafes /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
