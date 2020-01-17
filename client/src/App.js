import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerData from './Components/PlayerData';
import Navbar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <PlayerData/>
    <h1>test</h1>
    </div>
  );
}

export default App;
