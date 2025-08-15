import React from 'react';
import './Home.css';
// import home from '../../../assets/images/hpme.jpg'; // Add your image in src folder

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="content">
          <h1 className="title">Welcome to Our Community</h1>
          <p className="description">
            Join our events, meet new people, and make a difference together!
          </p>
          <button className="btn">Explore Events</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
