import React from 'react';
import logo from './logo.svg';
import me from './me.jpg';
import './App.css';

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

      <div className='container'>
      <img src={me} className="me" alt="me" />
        <div className='bio'>
          <ul>
            <li>
            <h2>Name     : Muhammad Ripqi</h2> 
            </li>
            <li>
            <h2>Birth    : Ciamis, West Java</h2> 
            </li>
            <li>
            <h2>Location : Medan</h2> 
            </li>
            <li>
            <h2>Job      : Developer</h2> 
            </li>
            <li>
            <h2>Likes    : Cat, Games, Novel</h2>
            </li>
          </ul>
    
        </div>
      </div>
    </div>

  );
}

export default App;
