import React from 'react';
import { SurfForeCast } from './components/SurfForeCast/SurfForeCast';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p><span><b>Shred</b>Fish</span></p>
      </header>
      <main>
        <SurfForeCast />
      </main>
    </div>
  );
}

export default App;
