import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* Header */}
      <header className="header">
        <div className="logo">ITBrainBooster</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/subjects">Courses</Link></li>
            <li><Link to="/about" className="active">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <Link to="/register">
          <button className="get-started-nav">Get Started</button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="about-section">
        <h2>About ITBrainBooster</h2>

        <h3>Our Story</h3>
        <p>
          ITBrainBooster was founded to provide high-quality training for individuals
          determined to advance their technical knowledge and skills. We deliver the
          most <strong>current and practical IT courses</strong> for modern industry demands.
        </p>

        <h3>Mission & Vision</h3>
        <div className="mission-vision-container">
          <div className="mission-box">
            <h4>Our Mission</h4>
            <p>
              Empower individuals with the latest skills and practical knowledge to thrive
              in a constantly changing technological landscape.
            </p>
          </div>
          <div className="vision-box">
            <h4>Our Vision</h4>
            <p>
              To be the leading institution for technical skill enhancement for IT professionals
              in Sri Lanka and across the globe.
            </p>
          </div>
        </div>

        <h3>Why Choose Us?</h3>
        <ul className="why-us-list">
          <li><strong>Industry Experts:</strong> Experienced instructors with practical experience.</li>
          <li><strong>Practical Focus:</strong> Hands-on projects solving real-world challenges.</li>
          <li><strong>Flexible Learning:</strong> Learn at your own pace with live and recorded classes.</li>
          <li><strong>Community Support:</strong> Vibrant community for networking and growth.</li>
        </ul>

        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <Link to="/subjects">
            <button className="get-started-main">Explore Our Courses</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
