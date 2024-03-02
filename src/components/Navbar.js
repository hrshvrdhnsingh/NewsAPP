import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  // State for toggling the menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleCheckboxChange = () => {
    const themeCheckbox = document.querySelector('.theme-checkbox');
    const body = document.querySelector('body');
    
    if (themeCheckbox.checked) {
      body.style.backgroundColor = 'black';
    } else {
      body.style.backgroundColor = 'white';
    }
  };

  return (
    <div className='nav-bar'>
      <header className="header">
        <Link to="/" className="logo">MediConnect</Link>
        {/* Show FaBars icon only on small screens */}
        <FaBars className='menu-icon' onClick={toggleMenu} />
        {/* <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Health</Link>
          <Link to="/science" onClick={closeMenu}>Science</Link>
          <Link to="/technology" onClick={closeMenu}>Technology</Link>
          <Link to="/india" onClick={closeMenu}>India News</Link>
        </nav> */}
        <input 
          type="checkbox" 
          className="theme-checkbox" 
          onChange={(e) => {
            const body = document.querySelector('body');
            body.style.backgroundColor = e.target.checked ? 'black' : '#afdcf6';
          }}
        />
      </header>
      
      <div className={`nav-bg ${menuOpen ? 'active' : ''}`}></div>
    </div>
  );
};

export default Navbar;
