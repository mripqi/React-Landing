import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from './bio'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <h1>Welcome!</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className='nav-flex-container'>
        <div>Home</div>
        <div>Contact</div>
      </div>

      <Bio />
      
    </div>

  );
}

export default App;
