import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Home from '../Home/Home';

const NavBar = () => {
    const localget=JSON.parse(localStorage.getItem("name"))
  return (
    <div>
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Colony_Head</h1>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className="nav-links">
            
          <Link to="">Home</Link>
          <Link to="/upload">Event Upload</Link>
          <Link to="/complain">Check Complain</Link>
          <p>welcome: </p>{localget}
          
          <button className="logout-btn">Logout</button>
        </div>
        
      </div>
     
    </nav>
    <Home/>
    </div>
  );
};

export default NavBar;
