import React from 'react';
import { SurfForeCast } from './components/SurfForeCast/SurfForeCast';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <main>
        <SurfForeCast />
      </main>
    </div>
  );
}

export default App;
