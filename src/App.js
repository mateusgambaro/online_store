import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route>
        <Route path="/" element={<Login />} />
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
