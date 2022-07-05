import React from 'react'
import './App.css';
import Thali from './components/Thali';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
          <Route index element={<Thali />} />
          <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
