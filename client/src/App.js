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
    </div>
  );
}

export default App;
