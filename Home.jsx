import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const user = JSON.parse(localStorage.getItem('quizUser') || 'null');

  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">ITBrainBooster</div>
        <nav>
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/subjects">Courses</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <Link to={user ? "/subjects" : "/register"}>
          <button className="get-started-nav">Get Started</button>
        </Link>
      </header>

    
      <main className="hero-section">
        <div className="hero-content">
          <h1>Welcome to ITBrainBooster</h1>
          <p>Your path to advancing technical knowledge and skills!</p>
          <Link to={user ? "/subjects" : "/register"}>
            <button className="get-started-main">Get Started</button>
          </Link>
        </div>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}
