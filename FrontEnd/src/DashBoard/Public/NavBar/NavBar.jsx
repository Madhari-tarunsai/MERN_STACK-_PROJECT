import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Home from '../Home/Home';

const NavBar = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">MyWebsite</h1>

        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/events">Latest_Events</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
    <Home/>
    </div>
  );
};

export default NavBar;
