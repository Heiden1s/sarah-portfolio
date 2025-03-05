import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import FloatingNav from './components/Navigation/FloatingNav';
import './styles/global.css';

function App() {
  return (
    <div className="App custom-scrollbar">
      <Navbar />
      <FloatingNav />
      <MainPage />
    </div>
  );
}

export default App;
