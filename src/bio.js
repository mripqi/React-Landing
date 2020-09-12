import React from 'react';
import './App.css';
import me from './me.jpg';

export default class Bio extends React.Component{
    render(){
        return(
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
        );
    }
}