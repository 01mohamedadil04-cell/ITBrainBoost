import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("quizUser") || "null");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("quizUser");
    navigate("/register");
  };

  return (
    <div className="home-page">
      {/* Header Section */}
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

        <div>
          <Link to={user ? "/subjects" : "/register"}>
            <button className="get-started-nav">Get Started</button>
          </Link>
          {user && (
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content">
          <h1>Welcome to ITBrainBooster</h1>
          <p>Your path to advancing technical knowledge and skills!</p>
          <Link to={user ? "/subjects" : "/register"}>
            <button className="get-started-main">Get Started</button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="copyright">
          <p>&copy; 2025 ITBrainBooster Group Project. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
