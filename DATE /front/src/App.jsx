import React from 'react';
import Header from './Header/Header'; // Ensure this path is correct
import './App.css';
import Card from './Card/Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Card/>
        <Routes>
          {/* Correct way to define Route elements */}
          <Route path="/" element={<h1>Hi, this is the Home Page</h1>} />
          <Route path="/user" element={<h1>This is the User Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;