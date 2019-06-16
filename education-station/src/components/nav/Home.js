import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <Link className="home-link" to="/schools">
          Education Station
        </Link>
      </header>
    </div>
  );
}

export default Home;
