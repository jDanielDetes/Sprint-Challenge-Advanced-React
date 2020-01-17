import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerData from './Components/PlayerData';
import Navbar from './Components/NavBar';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='margin'></div>
    <PlayerData/>
    <h1>test</h1>
    </div>
  );
}

export default App;
