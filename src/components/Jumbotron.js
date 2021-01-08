import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Jumbotron.css';

function Jumbotron() {
  return (
    <div className='jumbo-container'>
      <img src='https://media.tenor.com/images/43eb93c5ac65c1aa3fed6b3e3ee5971d/tenor.gif' autoPlay loop muted />
      <h1>GAMES DEVELOPER</h1>
      <p>[ New Website Coming Soon! ]</p>
    </div>
  );
}

export default Jumbotron;
