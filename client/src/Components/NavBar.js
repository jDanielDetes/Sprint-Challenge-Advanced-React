import React, { useState } from 'react';
import {useDarkMode} from  '../hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Womens World cup US players!</h1>
      
        <button  onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}>DARK MODE</button>
    </nav>
    
  );
};

export default Navbar;
