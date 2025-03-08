import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Preload font to ensure it's available
const preloadFont = () => {
  // Get the correct font path
  // In production PUBLIC_URL will be the domain or subfolder
  // In development it will be an empty string
  const publicUrl = process.env.PUBLIC_URL || '';
  const fontPath = `${publicUrl}/OverpassMono-VariableFont_wght.ttf`;
  
  // Create a new link element
  const fontPreload = document.createElement('link');
  fontPreload.href = fontPath;
  fontPreload.rel = 'preload';
  fontPreload.as = 'font';
  fontPreload.type = 'font/ttf';
  fontPreload.crossOrigin = 'anonymous';
  
  // Add it to the head
  document.head.appendChild(fontPreload);
  
  // Also create a style element for the font-face
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'Overpass Mono';
      src: url('${fontPath}') format('truetype');
      font-weight: 100 900;
      font-style: normal;
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
  
  console.log('Font loaded from path:', fontPath);
};

// Run font preloading
preloadFont();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
