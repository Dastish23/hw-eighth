import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ParentFirst from './components/First.example';
import ParentSecond from './components/Second.example';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ParentFirst />
    <ParentSecond />
  </React.StrictMode>
);
