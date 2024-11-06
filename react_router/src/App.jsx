import { useState } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Emma from './components/Emma';

function App() {
  return (
    <>
      <div id="container">
        <NavBar />
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/emma" element={<Emma />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
