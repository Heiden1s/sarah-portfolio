import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import Contact from './components/Contact/Contact';
import FloatingNav from './components/Navigation/FloatingNav';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App custom-scrollbar">
        <Navbar />
        <FloatingNav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
