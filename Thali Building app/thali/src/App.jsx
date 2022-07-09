import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Thali from './components/Thali';
import Checkout from './components/Checkout';

function App() {


  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path="/" element={<Thali />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
