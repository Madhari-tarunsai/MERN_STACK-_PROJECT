import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Colony_Head</h1>
          <p>Manage your colony events, complaints, and updates easily.</p>
          <a href="/upload" className="btn-primary">Upload Event</a>
        </div>
      </section>

     
    </div>
  );
};

export default Home;
