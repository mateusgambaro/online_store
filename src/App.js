import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import AddProducts from './pages/addProducts/AddProducts';
import ListProducts from './pages/listProducts/ListProducts';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/add" element={<AddProducts />} />
        <Route exact path="/products" element={<ListProducts />} />
      </Routes>
    </div>
  );
}

export default App;
