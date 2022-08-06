import React from 'react';
import logo from './logo.svg';
import { ForeCastResult } from './components/forecastResult/ForeCastResult';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <main>
        <ForeCastResult />
      </main>
    </div>
  );
}

export default App;
